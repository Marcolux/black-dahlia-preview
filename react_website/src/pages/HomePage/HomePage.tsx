import { Link } from "react-router-dom"
import "../page.scss" 
import "./homepage.scss"
import { animated, config, useSpring } from "@react-spring/web"
import { useInView } from "react-intersection-observer"
import RollingTrail from "../../components/RollingTrail/RollingTrail"
import SpinningElement from "../../components/SpinningElement/SpinningElement"
import { ReactComponent as VectorHome } from './vector_home_page.svg'
import MugHoodieIters from "../../components/MugHoodieInters/MugHoodieIters"

const HomePage = () => {
    const [ ref, inView ] = useInView({
        threshold: 0.6,  // portion of the element visible to trigger
        triggerOnce: false
    })

    const styles = useSpring({
        from: { x: 0 },
        to: { x: inView ? -9 : 0 }, // animate a numeric "offset" instead
        config: { tension: 120, friction: 18 }
    })
    

    const rollingIcons: string[] = [
        'dahlia_icon_charcoal.svg',
        'dahlia_icon_silver.svg',
        'dahlia_icon_biege.svg',
        'dahlia_icon_burgundy.svg',
    ]

    return(
        <div className="page" id="HomePage">

            <section id="home_hero" >
                <img id="img-hero" src={`${process.env.PUBLIC_URL}/images/home-page/black-dahlia-landing_page_mockup.webp`}  alt="black dahlia landing hero" />
                <button id="landingBtn" className="primaryBtn">BOOK NOW</button>
                <animated.div
                    ref={ref}
                    style={{
                        position: 'absolute',
                        bottom: '0px',
                        right: '0px',
                        zIndex: 2,
                        transform: styles.x.to(v => `translateX(calc(${v}vw))`)
                    }}
                >
                    <img src={`${process.env.PUBLIC_URL}/images/home-page/chair-home.png`}  alt="black dahlia landing hero" />
                </animated.div>
            </section>

            <section id="offer">
                <h1>What We Offer</h1>
                <div id="offer-cards-wrapper" className="flex flex-wrap">
                    <div className="offer-cards"><p>LOGO DESIGN</p></div>
                    <div className="offer-cards"><p>BRAND IDENTITY</p></div>
                    <div className="offer-cards"><p>WEB DESIGN</p></div>
                    <div className="offer-cards"><p>BOOK CREATION</p></div>
                    <div className="offer-cards"><p>MENU DESIGN</p></div>
                    <div className="offer-cards"><p>CUSTOM PLANNER</p></div>
                    <div className="offer-cards"><p>EVENT BRANDING</p></div>
                </div>
                <button className="secondaryBtn">
                    <Link to={'/services'}>Explore Services <img src={`${process.env.PUBLIC_URL}/images/icons/Arrow-icon.png`}/></Link>
                </button>
            </section>

            <section id="transition-img">
                <img src={`${process.env.PUBLIC_URL}/images/home-page/street_mockup.webp`} alt="Black Dahlia on street wall" />
            </section>

            <section id="why-black-dahlia">
                <h1>why black dahlia</h1>
                <div id="textBoxWrapper">
                    <div id="intro" className="col-12 flex" >
                        <p>Because we don’t just Design, we disrupt!</p>
                        <RollingTrail icons={rollingIcons}></RollingTrail>
                    </div>
                    <div id="text">
                        <p>
                            At Black Dahlia Creative, every project starts with purpose and ends with impact. 
                            <br />We believe design should do more than look beautiful!  
                            It should say something, move people, and make your brand impossible to ignore.
                            <br />We blur the line between art and strategy, blending elegance with rebellion to create visuals that are as timeless as they are bold. 
                            Whether it’s a logo, a full rebrand, or packaging that demands attention, we design with meaning, not trends.
                        </p>
                        <p>
                            Are you ready to bloom beyond the ordinary?  
                            &nbsp;&nbsp;To break the rules beautifully and make your mark with intention and style?
                        </p>
                    </div>
                    <button className="primaryBtn">BOOK NOW</button>
                </div>
            </section>

            <section id="spinningItersection">
                <SpinningElement 
                    duration={20000}
                    pauseOnHover={true}
                >
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/home-page/bloom_against_the_grain.png`}
                    />
                </SpinningElement>
            </section>

            <section id="mugHoodie" className="my-50">
                    <MugHoodieIters></MugHoodieIters>
                    <div className="flex col-12" id="middlePicWrapper" >
                        <img 
                            src={`${process.env.PUBLIC_URL}/images/home-page/bd_mugs.png`}
                            // style={{position:'absolute', bottom: '0px', left:"0px"}}
                        />
                        <img 
                            src={`${process.env.PUBLIC_URL}/images/home-page/black_dahlia_mens_hoodie.webp`}
                            // style={{position:'absolute', bottom: '0px', right: '0px'}}
                        />

                    </div>
            </section>
        </div>
    )
}

export default HomePage