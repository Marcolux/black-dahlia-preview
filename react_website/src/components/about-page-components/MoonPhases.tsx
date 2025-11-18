import { useEffect, useRef, useState } from "react"

type MoonIcon = {
  icon: string
}

const MoonPhase = ({ icon }: MoonIcon) => {
    const phaseRef = useRef<HTMLDivElement | null>(null);
    const [progress, setProgress] = useState(1) // 1 = full line

    useEffect(() => {
        const handleScroll = () => {
            const el = phaseRef.current
            if (!el) return

            const rect = el.getBoundingClientRect()
            const windowH = window.innerHeight

            // how far through this sticky section we are (0 → 1)
            const raw = 1 - rect.top / windowH
            const clamped = Math.max(0, Math.min(1, raw))

            // you can invert / tweak here
            setProgress(1 - clamped) // line gets shorter as you scroll
        }

        handleScroll(); // set initial value
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div
            className="moon_phase"
            ref={phaseRef}
            style={{ "--line-progress": progress } as React.CSSProperties}
        >
            <img
                src={`${process.env.PUBLIC_URL}/images/about-page/${icon}`}
                alt="Black Dahlia moon phases: phase 1"
            />
        </div>
    )
}
export default MoonPhase