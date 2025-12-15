import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import RollingTrail from "../../components/home-page-components/RollingTrail/RollingTrail"
import SpinningElement from "../../components/home-page-components/SpinningElement/SpinningElement"
import MugHoodieIters from "../../components/home-page-components/MugHoodieInters/MugHoodieIters"
import HomePageSeparator from "../../components/home-page-components/HomePageSeparator/HomePageSeparator"

import ScrollingImg from "../../components/ScrollingImg/ScrollingImg"
import ButtonScribble from "../../components/ButtonScribble/ButtonScribble"
import "../page.scss" 
import "./homepage.scss"

const HomePage = () => {
    const [smallScreenView, setSmallScreenView] = useState('Regular')
    
    const rollingIcons: string[] = [
        'dahlia_icon_charcoal.webp',
        'dahlia_icon_silver.webp',
        'dahlia_icon_biege.webp',
        'dahlia_icon_burgundy.webp',
    ]
    // const translateIcons: string[] = [
    //     'bd-landing-img-1.webp',
    //     'bd-landing-img-2.webp',
    //     'bd-landing-img-3.webp',
    //     'bd-landing-img-4.webp',
    //     'bd-landing-img-5.webp'
    // ]

    const handleResize = () => {
        window.innerWidth < 800
            ? setSmallScreenView('SmallScreen')
            : setSmallScreenView('Regular')
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false, // keep toggling when leaving/entering view
    })
    

    return(
        <div className="page" id="HomePage">
            <section id="land-intro">

                <div className={smallScreenView === 'SmallScreen' ? 'IntroSmScreen top' : 'hide'} >
                    <img
                        className="whiteLogo mt-20"
                        src={`${process.env.PUBLIC_URL}/images/white_logo 6.png`}
                        alt={`Dahlia Small Screen Logo`}
                        loading="lazy" 
                        decoding="async"
                    />
                    <img
                        className="circlesSmScreen mt-10"
                        src={`${process.env.PUBLIC_URL}/images/home-page/dahlia-circles-sm-screen.png`}
                        alt={`Dahlia Small Screen Intro`}
                        loading="lazy" 
                        decoding="async"
                    />
                </div>

                <div className="flex flex-column flex-justifyContent-center flex-alignItems-center textContainerIntro">
                    <img
                        className="mandalaIntro"
                        src={`${process.env.PUBLIC_URL}/images/icons/DAHLIA_white_mandala.png`}
                        alt={`Dahlia Mandala Intro`}
                        loading="lazy" 
                        decoding="async"
                    />
                    <HomePageSeparator/>

                    <h1 className="page_sub-headers">Design with edge.</h1>
                    <h1 className="page_sub-headers">Style with soul.</h1>
                    <p className="text-center page_paragraphText  mt-30 mb-0">Boutique branding & creative direction for the bold, the soulful, and the ones who dare to stand apart.</p>
                </div>
                
                <HomePageSeparator/>
                
                <div className="col-12 flex flex-column-md-down flex-alignItems-center flex-justifyContent-center buttonsHero">

                    <ButtonScribble className="primaryBtn" to={'/portfolio'} scribbleShift="50px">
                        Explore the Portfolio
                    </ButtonScribble>

                    <ButtonScribble 
                        className="primaryBtn-vr1 mt-0-lg mt-20 ml-20-md" 
                        to={'/portfolio'} 
                        scribbleShift="50px"
                        buttonBg="var(--black-dahlia-white)"
                        backColor="var(--secondary-color)"
                        lineColor="var(--secondary-color)"
                    >
                        Start your creative journey
                    </ButtonScribble>
                </div>

            </section>


            <section id="land-animation" className="">
                <HomePageSeparator/>
                <ScrollingImg image_url={`images/home-page/landing_page_hero_radius.png`}></ScrollingImg>
            </section>
            <section id="offer">
                <HomePageSeparator/>
                <h1 className="page_sub-headers ">What We Offer</h1>
                <div id="offer-cards-wrapper" className="flex flex-wrap my-45">
                    <div className="offer-cards"><p>LOGO DESIGN</p></div>
                    <div className="offer-cards"><p>BRAND IDENTITY</p></div>
                    <div className="offer-cards"><p>WEB DESIGN</p></div>
                    <div className="offer-cards"><p>BOOK CREATION</p></div>
                    <div className="offer-cards"><p>MENU DESIGN</p></div>
                    <div className="offer-cards"><p>CUSTOM PLANNER</p></div>
                    <div className="offer-cards"><p>EVENT BRANDING</p></div>
                </div>

                <ButtonScribble 
                    className="primaryBtn" 
                    to={'/services'}
                    scribbleShift="50px"
                    buttonBg="var(--alternative-black)"
                    backColor="var(--primary-color)"
                    lineColor="var(--black-dahlia-white)"
                >
                    Explore Services 
                </ButtonScribble>
                
            </section>

            <section id="transition-img">
                <HomePageSeparator/>
                <img 
                    src={`${process.env.PUBLIC_URL}/images/home-page/landing_page_mockup_middle.png`} 
                    alt="Black Dahlia on street wall" 
                    loading="lazy" 
                    decoding="async"
                />
            </section>

            <section id="why-black-dahlia">
                <HomePageSeparator/>
                <h1 className="page_sub-headers">why black dahlia?</h1>
                <div id="textBoxWrapper">
                    <RollingTrail icons={rollingIcons}></RollingTrail>
                    {/* <div id="intro" className="col-12 flex" >
                    </div> */}
                    <div id="text">
                        <p>Because we don’t just Design, we disrupt!</p>
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
                    
                    <ButtonScribble 
                        className="primaryBtn" 
                        to={'/services'}
                        scribbleShift="50px"
                        buttonBg="var(--alternative-black)"
                        backColor="var(--primary-color)"
                        lineColor="var(--black-dahlia-white)"
                    >
                        BOOK NOW
                    </ButtonScribble>
                </div>
            </section>

            <section id="spinningItersection">
                <SpinningElement 
                    duration={20000}
                    pauseOnHover={true}
                >
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/home-page/bloom_against_the_grain_text.webp`}
                        alt="Spinning bloom against the grain text"
                        loading="lazy" 
                        decoding="async"
                    />
                </SpinningElement>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/home-page/bloom_against_the_grain_vec.webp`}
                        id="staticImg"
                        alt="Static bloom against the grain"
                        loading="lazy" 
                        decoding="async"
                    />

            </section>

            <section id="mugHoodie">
                    <MugHoodieIters></MugHoodieIters>
                    <div className="flex col-12" id="middlePicWrapper" >
                        <img 
                            id="picLeft"
                            src={`${process.env.PUBLIC_URL}/images/home-page/bd_mugs.webp`}
                            alt="Mugs Middle Page"
                            loading="lazy" 
                            decoding="async"
                        />
                        <img 
                            id="picRight"
                            src={`${process.env.PUBLIC_URL}/images/home-page/black_dahlia_mens_hoodie.webp`}
                            alt="Hoodie Middle Page"
                            loading="lazy" 
                            decoding="async"
                        />

                    </div>
            </section>

            <section className="flex flex-column flex-justifyContent-center flex-alignItems-center" id="plannersInt">
                <p className="textPlanners" id="top">We LOVE to create Planners!</p>
                <img 
                    src={`${process.env.PUBLIC_URL}/images/home-page/blac_dahlia_planner_mockup.webp`} 
                    alt="Planner Mockup" 
                    loading="lazy" 
                    decoding="async"
                />
                <p className="textPlanners" id="bottom">Reach out to Create your own personalized Planner!</p>
            </section>

            <section className="flex flex-column" id="organizedInt">
                <div id="animatedOrg">
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/home-page/black_dahlia_box_set_mockup.webp`} 
                        alt="Planners Set" 
                        loading="lazy" 
                        decoding="async"
                    />
                    <div className="flex" id="rollingDahliaTextWrap">
                        <h1 className="textOrg" id="bottom">Organized Chaos!</h1>
                        <img 
                            ref={ref} 
                            className={inView ? 'is-active' : ''} 
                            id="orgRollDahlia" 
                            src={`${process.env.PUBLIC_URL}/images/home-page/dahlia_icon_lightgray.webp`} 
                            alt="Organized Chaos Spinning Dahlia"
                            loading="lazy" 
                            decoding="async" 
                        />
                    </div>
                </div>
                <div id="bookNowOrg">
                    <p>Schedule your complimentary Discover Call TODAY!</p>
                    <ButtonScribble 
                        className="primaryBtn" 
                        to={'/services'}
                        scribbleShift="50px"
                        buttonBg="var(--alternative-black)"
                        backColor="var(--primary-color)"
                        lineColor="var(--black-dahlia-white)"
                    >
                        BOOK NOW
                    </ButtonScribble>
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