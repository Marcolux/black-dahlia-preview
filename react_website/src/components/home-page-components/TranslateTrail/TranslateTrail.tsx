import { useTrail, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import './translate-trail.scss'

type TranslateTrailProps = {
  icons: string[]
}

const TranslateTrail = ({ icons }: TranslateTrailProps) => {
    const [ref, inView] = useInView({ threshold: 1 })

    const trail = useTrail(icons.length, {
        to: { transform: inView ? `translateX(0%) rotateY(0deg)` : `translateX(100%) rotateY(360deg)`},
        config: {
            tension: 120,
            friction: 18
        }
    })

    return (
        <div ref={ref} 
            className="translateDahlia flex col-12 flex-justifyContent-center" 
            style={{
                flex: 'auto', 
                position: 'relative', 
                gap: '30px', 
                overflow: 'hidden'
            }}>
            {trail.map((style, i) => (
                <animated.div 
                    key={i} 
                    style={style}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/images/home-page/${icons[i]}`}
                        alt={`Rolling Dahlia ${icons[i]}`}
                    />
                </animated.div>
            ))}
        </div>
    )
}

export default TranslateTrail