import { Link } from "react-router-dom";
import './button-scribble.scss'

type ButtonScribbleProps = {
    children: React.ReactNode
    to: string
    buttonBg?: string
    lineColor?: string   // CSS variable or color value
    backColor?: string   // CSS variable or color value
    className?: string
    scribbleShift?: string
    external?: '_blank' | null
}

const ButtonScribble: React.FC<ButtonScribbleProps> = ({
    children,
    to,
    buttonBg,
    lineColor = "var(--black-dahlia-white)",
    backColor = "var(--secondary-color)",
    className = "",
    scribbleShift = "",
    external = null,

    ...rest
}) => {
    const classes = `buttonScr ${className}`.trim()
    const isExternal = external === '_blank' ? '_blank' : ''

    return (
        <Link
            to={to}
            className={classes}
            style={{
                // Pass CSS variables dynamically
                // SCSS will pick these up automatically
                ["--line_color" as any]: lineColor,
                ["--back_color" as any]: backColor,
                ["--scribble-shift" as any]: scribbleShift,
                backgroundColor: buttonBg ? buttonBg : '' 
            }}
            target = {isExternal}
            {...rest}
        >
            <div className="buttonScr__line" />
            <div className="buttonScr__line" />

            <span className="buttonScr__text">{children}</span>

            <div className="buttonScr__drow1" />
            <div className="buttonScr__drow2" />
        </Link>
    )
}

export default ButtonScribble
