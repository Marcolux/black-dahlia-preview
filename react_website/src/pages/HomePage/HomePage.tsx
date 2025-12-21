import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import RollingTrail from "../../components/home-page-components/RollingTrail/RollingTrail"
import SpinningElement from "../../components/home-page-components/SpinningElement/SpinningElement"
import MugHoodieIters from "../../components/home-page-components/MugHoodieInters/MugHoodieIters"
import HomePageSeparator from "../../components/home-page-components/HomePageSeparator/HomePageSeparator"
import Mandala from "../../components/Mandala/Mandala"
import ScrollingImg from "../../components/ScrollingImg/ScrollingImg"
import ButtonScribble from "../../components/ButtonScribble/ButtonScribble"
import { ReactComponent as Dahlia } from "./mandala_dahlia.svg";
import "./homepage.scss"
import "../page.scss" 

const HomePage = () => {
    const [smallScreenView, setSmallScreenView] = useState('Regular')

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
        threshold: 0.2,
        triggerOnce: false, // keep toggling when leaving/entering view
    })
    
    return(
        <div className="page" id="HomePage">

            <section id="land-intro">
                <div className="flex flex-column flex-justifyContent-center flex-alignItems-center textContainerIntro">
                    <Mandala></Mandala>
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
                        className="primaryBtn-vr1 mt-0-lg mt-10 ml-20-md" 
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
                <ScrollingImg 
                    image_url={`images/home-page/landing_page_hero_radius.png`}
                    image_alt="Black Dahlia wall design in living room"
                ></ScrollingImg>
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
                    backColor="var(--primary-color-vr)"
                    lineColor="var(--black-dahlia-white)"
                >
                    Explore Services 
                </ButtonScribble>
            </section>

            <section id="transition-img">
                <HomePageSeparator/>
                <ScrollingImg 
                    image_url={`images/home-page/landing_page_mockup_middle.webp`}
                    image_alt="Black Dahlia Logo in living room"
                ></ScrollingImg>
            </section>

            <section id="why-black-dahlia">
                <HomePageSeparator/>
                <h1 className="page_sub-headers">why black dahlia?</h1>
                <div className="col-12 mt-50">
                    <RollingTrail icons={[Dahlia,Dahlia,Dahlia,Dahlia]} portionVisible={0.7}></RollingTrail>
                </div>
                <div id="textBoxWrapper" className="mt-50">
                    <div id="text">
                        <p>Because we don’t just Design, we disrupt!</p>
                        <p>
                            At Black Dahlia Creative, every project starts with purpose and ends with impact. 
                            We believe design should do more than look beautiful!  
                            It should say something, move people, and make your brand impossible to ignore.
                            We blur the line between art and strategy, blending elegance with rebellion to create visuals that are as timeless as they are bold. 
                            Whether it’s a logo, a full rebrand, or packaging that demands attention, we design with meaning, not trends.
                        </p>
                        <p>
                            Are you ready to bloom beyond the ordinary?  
                            &nbsp;&nbsp;To break the rules beautifully and make your mark with intention and style?
                        </p>
                    </div>
                    <ButtonScribble 
                        className="primaryBtn mt-20" 
                        to={'/services'}
                        scribbleShift="50px"
                        buttonBg="var(--alternative-black)"
                        backColor="var(--primary-color-vr)"
                        lineColor="var(--black-dahlia-white)"
                    >
                        BOOK NOW
                    </ButtonScribble>
                </div>
            </section>

            <section id="spinningItersection" className="my-40">
                <HomePageSeparator/>
                <div className="spinWrapper mt-40">
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
                </div>
            </section>

            <section id="mugHoodie">
                <div className="flex flex-column col-12" id="middlePicWrapper" >
                
                    <HomePageSeparator/>
                    <div className={smallScreenView !== 'SmallScreen' ? "flex col-12 flex-justifyContent-center breathingMug mb-40" : "hide"}>
                        <MugHoodieIters></MugHoodieIters>
                        <div  className='flex flex-alignItems-center flex-justifyContent-center col-12' style={{gap: '150px'}}>
                            <img 
                                id="picLeft"
                                src={`${process.env.PUBLIC_URL}/images/home-page/bd_mugs.png`}
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
                    </div>
                    <div className={smallScreenView === 'SmallScreen' ? 'breathingTransition' : 'hide'} >
                        <div className="flex col-12 flex-justifyContent-center breathingMug mb-40">
                            <MugHoodieIters></MugHoodieIters>
                            <div className="flex flex-column col-12 flex-alignItems-center flex-justifyContent-center">
                                <img 
                                    id="picLeft"
                                    src={`${process.env.PUBLIC_URL}/images/home-page/bd_mugs.png`}
                                    alt="Mugs Middle Page"
                                    loading="lazy" 
                                    decoding="async"
                                />
                                <img 
                                    className="mt-40"
                                    id="picRight"
                                    src={`${process.env.PUBLIC_URL}/images/home-page/black_dahlia_mens_hoodie.webp`}
                                    alt="Hoodie Middle Page"
                                    loading="lazy" 
                                    decoding="async"
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <HomePageSeparator/>

            <section className="flex flex-column flex-justifyContent-center flex-alignItems-center my-40" id="plannersInt">
                <p className="textPlanners" id="top">Planners, designed with intention.</p>
                <img 
                    src={`${process.env.PUBLIC_URL}/images/home-page/blac_dahlia_planner_mockup.webp`} 
                    alt="Planner Mockup" 
                    loading="lazy" 
                    decoding="async"
                />
                <p className="textPlanners" id="bottom">Reach out to Create your own personalized Planner!</p>
            </section>

            <section className="flex flex-column pb-50" id="wildNotes">
                <HomePageSeparator/>
                <div className="wildNotes_txt flex flex-column p-50">
                    <p className="mt-0">
                        Wild Notes and Wicked Notes are two sides of the same creative spirit. 
                        Wild Notes is our boho inspired monthly planner and journal in one. 
                        It’s earthy, intuitive, and free flowing.  
                        Designed for those who plan with heart, reflection, and an organic rhythm. 
                    </p>
                    <p>
                        Wicked Notes is its dark, witchy monthly planner and journal in one counterpart.  
                        Bold, moody, and empowering! Created for those who thrive on intention, ritual, and unapologetic structure. 
                        Whether you’re drawn to light and flow or shadow and strength, there’s a planner made to match your energy.
                    </p>
                    <div id="btnWrapper" className="flex flex-column-md-down col-12 flex-alignItems-center flex-justifyContent-center mt-50 ">
                        <ButtonScribble 
                            className="primaryBtn" 
                            to={'https://a.co/d/gviU8SW'} 
                            scribbleShift="50px"
                            external= '_blank'
                        >
                            Explore Wild Notes
                        </ButtonScribble>
                        <ButtonScribble 
                            className="primaryBtn-vr1 mt-0-lg mt-20 ml-50-md" 
                            to={'https://a.co/d/arojMXT'} 
                            scribbleShift="50px"
                            buttonBg="var(--black-dahlia-white)"
                            backColor="var(--secondary-color)"
                            lineColor="var(--secondary-color)"
                            external= '_blank'
                        >
                            Discover Wicked Notes
                        </ButtonScribble>
                    </div>
                </div>
                <HomePageSeparator/>
            </section>

            <section id="bundle-img">
                <ScrollingImg 
                    image_url={`images/home-page/black_dahlia_box_set_mockup.webp`}
                    image_alt="Black Dahlia bundle"
                ></ScrollingImg>
            </section>

            <section className="flex flex-column" id="organizedInt">
                <div id="animatedOrg" className="py-30">
                    <HomePageSeparator/>
                    <div className="flex" id="rollingDahliaTextWrap">
                        <h1 className="textOrg" id="bottom">Organized Chaos!</h1>
                        <Dahlia
                            ref={ref} 
                            className={inView ? 'is-active' : ''} 
                            id="orgRollDahlia" 
                        />
                    </div>
                    <HomePageSeparator/>
                </div>
                <div id="bookNowOrg">
                    <p>Schedule your complimentary Discover Call TODAY!</p>
                    <ButtonScribble 
                        className="primaryBtn mt-40" 
                        to={'/services'}
                        scribbleShift="50px"
                        buttonBg="var(--alternative-black)"
                        backColor="var(--primary-color-vr)"
                        lineColor="var(--black-dahlia-white)"
                    >
                        BOOK NOW
                    </ButtonScribble>
                </div>
                <div className="linearTextAnimat mt-50">
                    <div className="linearTextAnimat__inner mt-50">
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