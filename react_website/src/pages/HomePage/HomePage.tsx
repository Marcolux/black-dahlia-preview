import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import RollingTrail from "../../components/home-page-components/RollingTrail/RollingTrail"
import SpinningElement from "../../components/home-page-components/SpinningElement/SpinningElement"
import TranslateTrail from "../../components/home-page-components/TranslateTrail/TranslateTrail"
import MugHoodieIters from "../../components/home-page-components/MugHoodieInters/MugHoodieIters"
import "../page.scss" 
import "./homepage.scss"

const HomePage = () => {
    
    const rollingIcons: string[] = [
        'dahlia_icon_charcoal.svg',
        'dahlia_icon_silver.svg',
        'dahlia_icon_biege.svg',
        'dahlia_icon_burgundy.svg',
    ]
    const translateIcons: string[] = [
        'bd-landing-img-1.png',
        'bd-landing-img-2.png',
        'bd-landing-img-3.png',
        'bd-landing-img-4.png',
        'bd-landing-img-5.png'
    ]

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false, // keep toggling when leaving/entering view
    })

    return(
        <div className="page" id="HomePage">
            <section className="" id="land-intro">
                <h1 className="text-center fontSize48 my-0">Design with edge.</h1>
                <h1 className="text-center fontSize48 my-0">Style with soul.</h1>
                <p className="text-center fontSize20  my-30">Boutique branding & creative direction for the bold, the soulful, and the ones who dare to stand apart.</p>
                <div className="col-12 flex flex-alignItems-center flex-justifyContent-center mt-30">
                    <Link 
                        id="explorePortfolio" 
                        to={'/portfolio'} 
                        className="primaryBtn mr-30"
                    >Explore the Portfolio
                    </Link>
                    
                    <Link to={'/contact'} 
                        id="createJourney" 
                        className="primaryBtn-vr1 ml-30"
                    >Start your creative journey
                    </Link>
                </div>
            </section>
            <section id="land-animation" className="py-50 my-30">
                <TranslateTrail icons={translateIcons}></TranslateTrail>
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
                <Link 
                    to={'/services'} 
                    className="primaryBtn" 
                >Explore Services
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/icons/Arrow-icon.png`} 
                        className="ml-20"
                    />  
                </Link>
                
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
                    <Link 
                        to={'/contact'} 
                        className="primaryBtn"
                    >BOOK NOW
                    </Link>
                </div>
            </section>

            <section id="spinningItersection">
                <SpinningElement 
                    duration={20000}
                    pauseOnHover={true}
                >
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/home-page/bloom_against_the_grain_text.png`}
                    />
                </SpinningElement>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/home-page/bloom_against_the_grain_vec.png`}
                        id="staticImg"
                    />

            </section>

            <section id="mugHoodie" className="">
                    <MugHoodieIters></MugHoodieIters>
                    <div className="flex col-12" id="middlePicWrapper" >
                        <img 
                            id="picLeft"
                            src={`${process.env.PUBLIC_URL}/images/home-page/bd_mugs.png`}
                        />
                        <img 
                            id="picRight"
                            src={`${process.env.PUBLIC_URL}/images/home-page/black_dahlia_mens_hoodie.webp`}
                        />

                    </div>
            </section>

            <section className="flex flex-column flex-justifyContent-center flex-alignItems-center" id="plannersInt">
                <p className="textPlanners" id="top">We LOVE to create Planners!</p>
                <img src={`${process.env.PUBLIC_URL}/images/home-page/blac_dahlia_planner_mockup.webp`} alt="" />
                <p className="textPlanners" id="bottom">Reach out to Create your own personalized Planner!</p>
            </section>

            <section className="flex flex-column" id="organizedInt">
                <div id="animatedOrg">
                    <img src={`${process.env.PUBLIC_URL}/images/home-page/black_dahlia_box_set_mockup.webp`} alt="" />
                    <div className="flex" id="rollingDahliaTextWrap">
                        <h1 className="textOrg" id="bottom">Organized Chaos!</h1>
                        <img ref={ref} className={inView ? 'is-active' : ''} id="orgRollDahlia" src={`${process.env.PUBLIC_URL}/images/home-page/dahlia_icon_lightgray.png`} alt="" />
                    </div>
                </div>
                <div id="bookNowOrg">
                    <p>Schedule your complimentary Discover Call TODAY!</p>
                    <button className="primaryBtn mt-50">BOOK NOW</button>
                </div>
                <div className="linearTextAnimat">
                    <div className="linearTextAnimat__inner">
                        <span>~ Dark Elegance meets bold design</span>
                        <span>~ Dark Elegance meets bold design</span>
                        <span>~ Dark Elegance meets bold design</span>
                        <span>~ Dark Elegance meets bold design</span>
                        <span>~ Dark Elegance meets bold design</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage