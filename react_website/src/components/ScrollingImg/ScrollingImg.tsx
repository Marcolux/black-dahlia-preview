import { animated, useScroll } from "@react-spring/web"
import "./scrolling-img.scss"

export default function ScrollingImg({ image_url }: { image_url: string }) {
    const { scrollYProgress } = useScroll()

    const opacity = scrollYProgress.to([0.02, 0.1], [0.5, 1], "clamp")
    const bordR = scrollYProgress.to([0.02, 0.1], [50, 0], "clamp")
    const widthW  = scrollYProgress.to([0.02, 0.1], [70, 100], "clamp") 
    const objRatio  = scrollYProgress.to([0.02, 0.1], [0, 5], "clamp") 

  return (
    <div className="img_wrapper col-12" style={{ overflow: "hidden" }}>
      <animated.div className={'flex flex-justifyContent-center col-12'}>
        <animated.img
            style={{
                margin: "0 auto",
                willChange: "transform, width, border-radius, opacity",
                opacity: opacity.to(op => `${op}`),
                borderRadius: bordR.to(v => `${v}%`),
                width: widthW.to(v => `${v}%`),
                height: 'auto',
                aspectRatio: objRatio.to(o => `${1 + o / 10} / 1`),
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

