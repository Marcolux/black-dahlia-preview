import { animated, useScroll } from "@react-spring/web"
import { useEffect, useState } from "react"
import "./scrolling-img.scss"

export default function ScrollingImg({ image_url }: { image_url: string }) {
    const { scrollYProgress } = useScroll()

    const [smallScreenViewMax, setSmallScreenViewMax] = useState(0)
    const [smallScreenViewMin, setSmallScreenViewMin] = useState(0)
    const [initialScrollingPosition, setInitialScrollingPosition] = useState(0)
    const [finalScrollPosition, setFinalScrollPosition] = useState(0)
    const handleResize = () => {
      const width = window.innerWidth

      const isSmallScreen  = width < 800
      const isMediumScreen = width >= 800 && width < 1550

      let targetWidthMin
      let targetWidthMax
      let initialScroll
      let finalScroll

      if (isSmallScreen) {
        targetWidthMin = 70
        targetWidthMax = 100
        initialScroll  = 0.02
        finalScroll  = 0.12
      } else if (isMediumScreen) {
        targetWidthMin = 50
        targetWidthMax = 100
        initialScroll  = 0.05
        finalScroll  = 0.14
      } else {
        targetWidthMin = 50
        targetWidthMax = 85
        initialScroll  = 0.07
        finalScroll  = 0.17
      }

      setSmallScreenViewMin(targetWidthMin)
      setSmallScreenViewMax(targetWidthMax)
      setInitialScrollingPosition(initialScroll)
      setFinalScrollPosition(finalScroll)
    }

    const opacity = scrollYProgress.to([initialScrollingPosition, finalScrollPosition], [0.4, 1], "clamp")
    const bordR = scrollYProgress.to([initialScrollingPosition, finalScrollPosition], [50, 0], "clamp")
    const widthW  = scrollYProgress.to([initialScrollingPosition, finalScrollPosition], [smallScreenViewMin, smallScreenViewMax], "clamp") 
    const objRatio  = scrollYProgress.to([initialScrollingPosition, finalScrollPosition], [0, 5], "clamp") 

  
    useEffect(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

  return (
    <div className="img_wrapper col-12 my-25" style={{ overflow: "hidden" }}>
      <animated.div className={'flex flex-justifyContent-center col-12'}>
        <animated.img
            style={{
                margin: "0 auto",
                willChange: "transform, width, border-radius, opacity",
                opacity: opacity.to(op => `${op}`),
                borderRadius: bordR.to(v => `${v}%`),
                width: widthW.to(v => `${v}%`),
                maxHeight: '100dvh',
                aspectRatio: objRatio.to(o => `${1 + o / 10} / 1`),
                objectPosition: 'top',
                objectFit: 'cover'
            }}
            alt={`Dahlia Small Screen Logo`}
            loading="lazy" 
            decoding="async"
            src={`${process.env.PUBLIC_URL}/${image_url}`}
        />

      </animated.div>
    </div>
  )
}

