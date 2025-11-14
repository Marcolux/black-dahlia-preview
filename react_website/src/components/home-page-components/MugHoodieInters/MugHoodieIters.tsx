import React from 'react'
import { useInView } from 'react-intersection-observer'
import { ReactComponent as VectorHome } from './vector_home_page.svg'

const MugHoodieIters: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, // keep toggling when leaving/entering view
  })

  return (
    <section
      id="mugHoodieIters"
      ref={ref}
      className={inView ? 'is-active' : ''}
    >
      <div id="vecWrapper">
        <VectorHome id="vect1" className="vector" />
        <VectorHome id="vect2" className="vector" />
        <VectorHome id="vect3" className="vector" />
        <VectorHome id="vect4" className="vector" />
      </div>
    </section>
  )
}

export default MugHoodieIters