import { useInView } from 'react-intersection-observer';
import { ReactComponent as VectorHome } from './mandala_dahlia.svg'
import './mandala.scss'
import { Link } from 'react-router-dom';

const Mandala = () => {
    const [ref, inView] = useInView({ threshold : 0.1 })
   
    return (
        <div className={inView ? 'is-active mandalaIntro' : 'mandalaIntro'} >
            <Link to={'/'}>            
                <VectorHome
                    ref={ref}
                    className="mandala_svg"
                />
            </Link>
        </div>
    )
}

export default Mandala