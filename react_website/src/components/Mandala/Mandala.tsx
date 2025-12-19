import { useTrail, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as VectorHome } from './mandala_dahlia.svg'
import './mandala.scss'

const Mandala = () => {
    const [ref, inView] = useInView({ threshold : 1 })
   
    return (
        <div className={inView ? 'is-active mandalaIntro' : 'mandalaIntro'} >
            <VectorHome
            ref={ref}
                className="mandala_svg"
            />
        </div>
    )
}

export default Mandala