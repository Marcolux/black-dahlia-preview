import { animated, useInView, useSpringValue } from "@react-spring/web"
import { useEffect, useState } from "react"
import "./scrolling-img.scss"

/**
 * Clamp a number between 0 and 1
 * Used to ensure scroll progress never overshoots
 */
const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

export default function ScrollingImg({ image_url, image_alt }: { image_url: string, image_alt: string }) {

  const [screenViewMax, setScreenViewMax] = useState(0)
  const [screenViewMin, setScreenViewMin] = useState(0)

  const handleResize = () => {
    const width = window.innerWidth

    const isSmallScreen  = width < 800
    const isMediumScreen = width >= 800 && width < 1550

    let targetWidthMin
    let targetWidthMax

    if (isSmallScreen) {
      targetWidthMin = 70
      targetWidthMax = 100
    } else if (isMediumScreen) {
      targetWidthMin = 50
      targetWidthMax = 100
    } else {
      targetWidthMin = 50
      targetWidthMax = 80
    }

    setScreenViewMin(targetWidthMin)
    setScreenViewMax(targetWidthMax)
  }
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  /**
   * useInView:
   * - Gives us a ref to attach to the DOM element
   * - Tells us whether the element is currently visible in the viewport
   *
   * Important:
   * - react-spring returns a RefObject (NOT a callback ref)
   * - We attach it directly to the wrapping <div>
   */
  const [ref, inView] = useInView({
    once: false,                 // allow re-triggering when scrolling back
    rootMargin: "-20% 0px",      // start tracking slightly before fully visible
  })

  /**
   * local progress SpringValue (0 → 1)
   *
   * This represents THIS component's scroll progress only,
   * not the global page scroll.
   *
   * 0 = element just entered the viewport
   * 1 = element has fully passed through the viewport
   */
  const progress = useSpringValue(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0 // requestAnimationFrame id (used to throttle scroll updates)

    /**
     * Calculate scroll progress based on element position
     */
    const update = () => {
      raf = 0

      // Element position relative to viewport
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight

      /**
       * Progress calculation:
       *
       * rect.top === vh        → progress = 0 (element enters from bottom)
       * rect.bottom === 0     → progress = 1 (element exits at top)
       *
       * This normalizes scroll position to a clean 0 → 1 range
       */
      const p = (vh - rect.top) / (vh + rect.height)

      // Clamp to avoid overshoot
      progress.set(clamp01(p))
    }

    /**
     * Scroll handler
     *
     * - Uses requestAnimationFrame for performance
     * - Optionally freezes animation when element is offscreen
     */
    const onScroll = () => {
      if (!inView) return        // stop updating when element isn't visible
      if (raf) return            // avoid multiple RAFs per frame
      raf = requestAnimationFrame(update)
    }

    // Initialize progress on mount / when entering view
    update()

    // Listen to scroll & resize (resize affects element position)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    // Cleanup listeners and pending RAF
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [ref, inView, progress])

  /**
   * Animation mappings
   *
   * These map local scroll progress (0 → 1)
   * to visual properties.
   *
   * You can adjust the ranges here to:
   * - speed up / slow down animations
   * - stagger effects
   * - make some finish earlier than others
   */
  const opacity = progress.to({
    range: [0, 0.5],             // fade completes halfway through scroll
    output: [0.4, 1],
    extrapolate: "clamp",
  })

  const bordR = progress.to({
    range: [0, 0.4],             // square earlier than opacity finishes
    output: [50, 0],             // circle → rectangle
    extrapolate: "clamp",
  })

  const widthW = progress.to({
    range: [0, 0.4],
    output: [screenViewMin, screenViewMax],           // grow width as user scrolls
    extrapolate: "clamp",
  })

  const objRatio = progress.to({
    range: [0, 0.4],
    output: [0, 5],              // aspect ratio morph
    extrapolate: "clamp",
  })

  return (
    <div
      ref={ref}
      className="img_wrapper col-12 py-25"
      style={{ overflow: "hidden" }}
    >
      <animated.img
        src={`${process.env.PUBLIC_URL}/${image_url}`}
        alt={`${image_alt}`}
        style={{
          opacity,
          borderRadius: bordR.to(v => `${v}%`),
          width: widthW.to(v => `${v}%`),

          // Layout / rendering safety
          maxHeight: "100dvh",
          aspectRatio: objRatio.to(o => `${1 + o / 10} / 1`),
          objectPosition: "top",
          objectFit: "cover",
          display: "block",
          margin: "0 auto",
        }}
      />
    </div>
  )
}
