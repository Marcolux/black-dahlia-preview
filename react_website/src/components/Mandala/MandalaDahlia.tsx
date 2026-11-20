import { CSSProperties, SVGProps } from 'react'
import './mandala-dahlia.scss'

// The Black Dahlia mandala: one petal shape, drawn 16 times around the center.
// Every petal is its own <g class="dahlia-petal">, so each one can have its own
// color, stroke width and fill, set here with props or animated in mandala-dahlia.scss.
//
// Drawn around (0, 0): the petal tip points up, the center is where all petals meet.
const PETAL_OUTLINE =
    'M0 -44.4 C0 -44.4 -11.5 -32.1 -9.85 -19.3 C-8.8 -11 0 0 0 0 ' +
    'C0 0 8.8 -11 9.85 -19.3 C11.5 -32.1 0 -44.4 0 -44.4 Z'
const PETAL_MIDRIB = 'M0 -44.4 V0'
const PETAL_VEINS =
    'M-7.75 -18.9 C-5.53 -16.25 -3.86 -13.16 -2.82 -9.88 C-1.85 -6.61 -0.26 -3.44 0 0 ' +
    'M7.75 -18.9 C5.53 -16.25 3.86 -13.16 2.82 -9.88 C1.85 -6.61 0.26 -3.44 0 0'

export const PETAL_COUNT = 16

export type PetalStyle = {
    color?: string        // outline, midrib and veins
    width?: number        // outline stroke width (midrib and veins scale with it)
    fill?: string         // inside of the petal
}

export type DahliaAnimation = 'none' | 'wave' | 'pulse' | 'bloom'

type Props = Omit<SVGProps<SVGSVGElement>, 'fill'> & {
    size?: number | string
    color?: string            // default petal color
    strokeWidth?: number      // default outline width (matches the original artwork)
    fill?: string             // default petal fill (a color; 'transparent' for none)
    petals?: PetalStyle[]     // per-petal overrides, petal 0 points up, then clockwise
    animation?: DahliaAnimation
    duration?: number         // seconds for one full animation cycle
    title?: string            // accessible name; leave empty when it's decoration
}

const MandalaDahlia = ({
    size = 120,
    color = '#eeece9',
    strokeWidth = 0.4,
    fill = 'transparent',
    petals = [],
    animation = 'none',
    duration = 10,
    title,
    className = '',
    style,
    ...svgProps
}: Props) => {
    const rootStyle = {
        '--petal-color': color,
        '--petal-width': strokeWidth,
        '--petal-fill': fill,
        '--dahlia-base-color': color,       // where the animations start and return to
        '--dahlia-base-width': strokeWidth,
        '--dahlia-duration': `${duration}s`,
        '--petal-count': PETAL_COUNT,
        ...style,
    } as CSSProperties

    return (
        <svg
            viewBox="-46 -46 92 92"
            width={size}
            height={size}
            className={`mandala-dahlia mandala-dahlia--${animation} ${className}`}
            style={rootStyle}
            role={title ? 'img' : undefined}
            aria-label={title}
            aria-hidden={title ? undefined : true}
            {...svgProps}
        >
            {Array.from({ length: PETAL_COUNT }, (_, i) => {
                const own = petals[i] ?? {}
                const petalStyle = {
                    '--i': i,
                    ...(own.color && { '--petal-color': own.color }),
                    ...(own.width !== undefined && { '--petal-width': own.width }),
                    ...(own.fill && { '--petal-fill': own.fill }),
                } as CSSProperties
                return (
                    <g key={i} className="dahlia-petal" transform={`rotate(${i * (360 / PETAL_COUNT)})`} style={petalStyle}>
                        {/* pathLength 1: lets the "bloom" animation draw each line from 0 to 100% */}
                        <path className="dahlia-petal__outline" d={PETAL_OUTLINE} pathLength={1} />
                        <path className="dahlia-petal__midrib" d={PETAL_MIDRIB} pathLength={1} />
                        <path className="dahlia-petal__veins" d={PETAL_VEINS} pathLength={1} />
                    </g>
                )
            })}
        </svg>
    )
}

export default MandalaDahlia
