import { useTrail, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import './rolling-trail.scss'

type RollingTrailProps = {
  icons: string[]
}

const RollingTrail = ({ icons }: RollingTrailProps) => {
    const [ref, inView] = useInView({ threshold: 1 })

    const trail = useTrail(icons.length, {
        from: {transform: `translateX(300%) rotate(360deg)`},
        to: { transform: inView ? `translateX(0%) rotate(0deg)` : `translateX(300%) rotate(360deg)`},
        config: {
            tension: 120,
            duration: 1000,
            friction: 20
        },
    })


    return (
        <div ref={ref} 
            className="rollingDahlia flex" 
            style={{
                flex: 'auto', 
                position: 'relative', 
                gap: '35px', 
            }}>
            {trail.map((style, i) => (
                <animated.div 
                    key={i} 
                    style={style}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/images/icons/${icons[i]}`}
                        alt={`Rolling Dahlia ${icons[i]}`}
                    />
                </animated.div>
            ))}
        </div>
    )
}

export default RollingTrail