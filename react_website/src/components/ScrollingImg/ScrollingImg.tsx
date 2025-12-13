import { animated, useScroll } from "@react-spring/web"
import "./scrolling-img.scss"

export default function ScrollingImg({ image_url }: { image_url: string }) {
    const { scrollYProgress } = useScroll()

    const scale = scrollYProgress.to([0.02, 0.12], [1, 1.2], "clamp")
    const opacity = scrollYProgress.to([0.02, 0.12], [0.5, 1], "clamp")
    const r = scrollYProgress.to([0.02, 0.12], [50, 0], "clamp")
    const y  = scrollYProgress.to([0.02, 0.12], [90, 100], "clamp") 


    


  return (
    <div className="img_wrapper col-12" style={{ overflow: "hidden" }}>
      <animated.div className={'flex flex-justifyContent-center col-12'}>
        <animated.img
            style={{
                margin: "0 auto",
                willChange: "transform, width, border-radius, opacity",
                opacity,
                borderTopLeftRadius: r.to(v => `${v}%`),
                borderTopRightRadius: r.to(v => `${v}%`),
                width: y.to(v => `${v}%`),
                height: '150%',
                transform: scale.to(s => `scale(${s})`),
                objectFit: 'cover'
            }}
            alt={`Dahlia Small Screen Logo`}
            loading="lazy" 
            decoding="async"
            src={`${process.env.PUBLIC_URL}/${image_url}`}
        />

      </animated.div>
    </div>
  )
}

