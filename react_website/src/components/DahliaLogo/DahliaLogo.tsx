import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import './dahlia-logo.scss'

// Brand palette
export const DAHLIA_COLORS = {
    blackberry: '#1f1d1d',
    cobalt: '#3a4c97',
    orchid: '#be508f',
    apricot: '#df9b57',
    porcelain: '#eadfd9',
} as const

// One petal, drawn with its base at (0, 0) and its tip pointing up at (0, -44).
const PETAL_PATH = 'M 0 -44 C 0 -44 -11.4 -33.6 -9.7 -19.1 C -8.5 -8.4 0 0 0 0 C 0 0 8.5 -8.4 9.7 -19.1 C 11.4 -33.6 0 -44 0 -44 Z'
const VEIN_PATH = 'M 0 -44 L 0 0'
const PETAL_COUNT = 16
const PETAL_ANGLE = 360 / PETAL_COUNT // 22.5°

export type DahliaLogoAnimation =
    | 'none'   // static logo
    | 'draw'   // outlines draw in clockwise from 12:00
    | 'tick'   // petals pop in one per beat, like a clock
    | 'bloom'  // 'draw', then each petal fills with color
    | 'palette' // fills keep fading through orchid, cobalt and apricot; lines stay `color`
    | 'assemble' // one at a time, clockwise, each petal floats in from the direction it points

// For each petal, how far it must start along its own direction to be fully outside
// the browser window, in logo units. Measured when the animation starts.
function measureFlights(svg: SVGSVGElement): number[] {
    const rect = svg.getBoundingClientRect()
    const unit = rect.width / 90 || 1 // screen pixels per logo unit
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const vw = window.innerWidth
    const vh = window.innerHeight
    const margin = 12 // px past the edge

    return Array.from({ length: PETAL_COUNT }, (_, i) => {
        const a = (i * PETAL_ANGLE * Math.PI) / 180
        const sx = Math.sin(a)  // screen direction the petal points
        const sy = -Math.cos(a)
        // distance from the flower's center to the window edge along that direction
        const toX = sx > 1e-6 ? (vw - cx) / sx : sx < -1e-6 ? -cx / sx : Infinity
        const toY = sy > 1e-6 ? (vh - cy) / sy : sy < -1e-6 ? -cy / sy : Infinity
        const toEdge = Math.max(0, Math.min(toX, toY))
        return (toEdge + margin) / unit
    })
}

type DahliaLogoProps = {
    size?: number | string      // width and height, e.g. 120 or '8rem'
    color?: string              // line color; defaults to the surrounding text color
    fillColor?: string          // petal fill; 'bloom' defaults to orchid
    fillOpacity?: number        // 0–1
    strokeWidth?: number        // outline weight in logo units (vein is half)
    veins?: boolean             // center line in each petal
    glow?: boolean              // soft halo around the lines
    animation?: DahliaLogoAnimation
    trigger?: 'mount' | 'inView' // start on page load, or when scrolled into view
    stagger?: number            // seconds between petals ('palette': 0 = all together, >0 = clockwise wave; 'assemble': default 0.25)
    duration?: number           // seconds each petal takes ('palette': one full color cycle; 'assemble': each petal's float-in, default 2)
    spin?: boolean              // 'assemble' only: keep turning once the flower is complete
    title?: string              // accessible name
    className?: string
}

const DahliaLogo: React.FC<DahliaLogoProps> = ({
    size = 120,
    color = 'currentColor',
    fillColor,
    fillOpacity = 0.55,
    strokeWidth = 0.4,
    veins = true,
    glow = false,
    animation = 'none',
    trigger = 'inView',
    stagger,
    duration,
    spin = true,
    title = 'Black Dahlia',
    className = '',
}) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
        skip: animation === 'none' || trigger !== 'inView',
    })

    const svgRef = useRef<SVGSVGElement | null>(null)
    const setRefs = useCallback((node: SVGSVGElement | null) => {
        svgRef.current = node
        ref(node)
    }, [ref])

    const isActive = animation !== 'none' && (trigger === 'mount' || inView)
    const fill = fillColor ?? (animation === 'bloom' ? DAHLIA_COLORS.orchid : undefined)

    // 'assemble' needs the logo's position on screen before it can start
    const [flights, setFlights] = useState<number[] | null>(null)
    useLayoutEffect(() => {
        if (animation !== 'assemble' || !isActive || !svgRef.current) return
        setFlights(measureFlights(svgRef.current))
    }, [animation, isActive])
    const isRunning = isActive && (animation !== 'assemble' || flights !== null)

    const classes = [
        'dahliaLogo',
        animation !== 'none' && `dahliaLogo--${animation === 'bloom' ? 'draw' : animation}`,
        isRunning && 'is-active',
        glow && 'dahliaLogo--glow',
        animation === 'assemble' && spin && 'dahliaLogo--spin',
        className,
    ].filter(Boolean).join(' ')

    const style = {
        width: size,
        height: size,
        '--dl-stroke': color,
        '--dl-fill': fill ?? 'none',
        '--dl-fill-opacity': fillOpacity,
        ...(stagger !== undefined && { '--dl-stagger': `${stagger}s` }),
        ...(duration !== undefined && { '--dl-duration': `${duration}s` }),
    } as React.CSSProperties

    return (
        <svg
            ref={setRefs}
            className={classes}
            style={style}
            viewBox="0 0 90 90"
            role="img"
            aria-label={title}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g transform="translate(45 45)" strokeWidth={strokeWidth}>
                <g className="dahliaLogo__spin">
                    {Array.from({ length: PETAL_COUNT }, (_, i) => (
                        <g
                            key={i}
                            transform={`rotate(${i * PETAL_ANGLE})`}
                            style={{ '--i': i } as React.CSSProperties}
                        >
                            {/* Inside the rotation, "up" is the way this petal points */}
                            <g
                                className="dahliaLogo__flight"
                                style={flights ? ({ '--dist': flights[i].toFixed(1) } as React.CSSProperties) : undefined}
                            >
                                <g className="dahliaLogo__petal">
                                    <path className="dahliaLogo__outline" d={PETAL_PATH} pathLength={1} />
                                    {veins && (
                                        <path
                                            className="dahliaLogo__vein"
                                            d={VEIN_PATH}
                                            pathLength={1}
                                            strokeWidth={strokeWidth / 2}
                                        />
                                    )}
                                </g>
                            </g>
                        </g>
                    ))}
                </g>
            </g>
        </svg>
    )
}

export default DahliaLogo
