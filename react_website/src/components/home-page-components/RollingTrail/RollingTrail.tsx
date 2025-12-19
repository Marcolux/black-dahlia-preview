import { useTrail, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import './rolling-trail.scss'

type SvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

type RollingTrailProps = {
  icons: SvgIcon[],
  portionVisible?: number 
}

const RollingTrail = ({ icons, portionVisible }: RollingTrailProps) => {
    const [ref, inView] = useInView({ threshold: portionVisible ? portionVisible : 1 })

    const trail = useTrail(icons.length, {
        from: {transform: `translateX(0%) rotate(0deg)`},
        to: { transform: inView ? `translateX(0%) rotate(0deg)` : `translateX(600%) rotate(360deg)`},
        config: {
            tension: 120,
            duration: 1000,
            friction: 20
        },
    })


    return (
    <div ref={ref} className="rollingDahlia flex" style={{ flex: "auto", position: "relative", gap: "35px" }}>
      {trail.map((style, i) => {
        const Icon = icons[i];
        return (
          <animated.div className={`rollingDahliaWrapper`} key={i} style={style} id={`rollingDahlia_${i+1}`}>
            <Icon className="rollingIcon" />
          </animated.div>
        );
      })}
    </div>
    )
}

export default RollingTrail