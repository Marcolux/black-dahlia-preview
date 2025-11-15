import { Link } from "react-router-dom"
import { ReactComponent as VectorHome } from './Vector.svg'
import { ReactComponent as BlinkingVectorHome } from './blinkingVector.svg'
import "../page.scss"
import "./about-page.scss"
import { useInView } from "react-intersection-observer"

const AboutPage = () => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: false, // keep toggling when leaving/entering view
    })

    return(
        <div className="page" id="AboutPage">
            <section className="flex col-12" id="introAbout">
                <div className="flex flex-column col-7" id="leftIntro">
                    <div className="flex flex-column py-20">
                        <h1>WHO IS</h1>
                        <h1>BLACK DAHLIA?</h1>
                    </div>
                    <div className="flex py-50 col-12 flex-justifyContent-end" id="heyImTrish">
                        <div className="flex flex-column">
                            <p className="text-center">Hey!</p>
                            <p className="text-center">I'm Trish!</p>
                        </div>
                        <img id="aboutLndArrow" src={`${process.env.PUBLIC_URL}/images/about-page/ArrowVector.png`} alt="Black Dahlia arrow vector"/>
                    </div>
                    <p id="intro-text">
                        I was born and raised in Chicago, but have some pretty deep southern Italian roots!  
                        I often travel back and forth in between Chicago and Italy.  
                        Half my heart is here and half is there!  
                        And I adore having 2 totally different lives on different sides of the world.  
                    </p>
                </div>

                <div className="flex flex-column flex-alignItems-center col-5" id="rightIntro">
                    <div className="flex m-25 p-25" id="pic">
                        <img  src={`${process.env.PUBLIC_URL}/images/about-page/BlackDahliaTrishPic.png`} alt="Black Dahlia Trish"/>
                    </div>
                    <div id="spinningIntroAbt" className="col-12 flex">
                        <img id="spinner-1" src={`${process.env.PUBLIC_URL}/images/icons/dahlia_icon_charcoal.svg`} alt="Black Dahlia charcoal"/>
                        <img id="spinner-2" src={`${process.env.PUBLIC_URL}/images/icons/dahlia_icon_silver.svg`} alt="Black Dahlia silver"/>
                        <img id="spinner-3" src={`${process.env.PUBLIC_URL}/images/icons/dahlia_icon_biege.svg`} alt="Black Dahlia beige"/>
                        <img id="spinner-4" src={`${process.env.PUBLIC_URL}/images/icons/dahlia_icon_burgundy.svg`} alt="Black Dahlia burgundy"/>
                    </div>
                    <Link to={'/contact'} className="primaryBtn-vr1 fontSize20 col-11 mt-45">BOOK NOW</Link>
                </div>

            </section>
            <section id="favorite_things" className="flex flex-column flex-alignItems-center">
                <h1 className="flex flex-justifyContent-center col-12 text-center">A Few of my Favorite things...</h1>
                <div className="flex flex-justifyContent-center col-10" id="cardWrapper">
                    
                    <BlinkingVectorHome ref={ref} id="Blink_vector" className={ inView? 'is-active' : ''} />
                    <div className="singleCard col-4">
                        <ul className="pl-0">
                            <li>
                                <VectorHome id="vect1" className="vector" />
                                Nature
                            </li>
                            <li>
                                <VectorHome id="vect2" className="vector" />
                                Travel
                            </li>
                            <li>
                                <VectorHome id="vect3" className="vector" />
                                My Family
                            </li>
                            <li>
                                <VectorHome id="vect4" className="vector" />
                                Chai Lattes
                            </li>
                            <li>
                                <VectorHome id="vect5" className="vector" />
                                Bonfires
                            </li>
                            <li>
                                <VectorHome id="vect6" className="vector" />
                                Mountains
                            </li>
                            <li>
                                <VectorHome id="vect7" className="vector" />
                                Elephants
                            </li>
                            <li>
                                <VectorHome id="vect8" className="vector" />
                                Black nails
                            </li>
                            <li>
                                <VectorHome id="vect9" className="vector" />
                                Nachos
                            </li>
                            <li>
                                <VectorHome id="vect10" className="vector" />
                                Journals
                            </li>
                        </ul>
                    </div>
                    <div className="singleCard col-4">
                        <ul className="pl-0">
                            <li>
                                <VectorHome id="vect21" className="vector" />
                                Crescent Moons
                            </li>
                            <li>
                                <VectorHome id="vect22" className="vector" />
                                A Starry night
                            </li>
                            <li>
                                <VectorHome id="vect23" className="vector" />
                                Pens & Markers
                            </li>
                            <li>
                                <VectorHome id="vect24" className="vector" />
                                Houseplants
                            </li>
                            <li>
                                <VectorHome id="vect25" className="vector" />
                                Stickers
                            </li>
                            <li>
                                <VectorHome id="vect26" className="vector" />
                                Books on a Bookshelf
                            </li>
                            <li>
                                <VectorHome id="vect27" className="vector" />
                                Sunglasses on the top of my head
                            </li>
                            <li>
                                <VectorHome id="vect28" className="vector" />
                                Gnomes
                            </li>
                            <li>
                                <VectorHome id="vect29" className="vector" />
                                The sound of Rain
                            </li>
                            <li>
                                <VectorHome id="vect30" className="vector" />
                                A Good Cozy Sweater
                            </li>
                        </ul>
                    </div>
                    <div className="singleCard col-4">
                        <ul className="pl-0">
                            <li>
                                <VectorHome id="vect11" className="vector" />
                                Planners
                            </li>
                            <li>
                                <VectorHome id="vect12" className="vector" />
                                Laughing until my Cheeks Hurt
                            </li>
                            <li>
                                <VectorHome id="vect13" className="vector" />
                                Music
                            </li>
                            <li>
                                <VectorHome id="vect14" className="vector" />
                                Hugs
                            </li>
                            <li>
                                <VectorHome id="vect15" className="vector" />
                                The crispness of Fall
                            </li>
                            <li>
                                <VectorHome id="vect16" className="vector" />
                                Lots of Pillows
                            </li>
                            <li>
                                <VectorHome id="vect17" className="vector" />
                                The color Black
                            </li>
                            <li>
                                <VectorHome id="vect18" className="vector" />
                                Pizza
                            </li>
                            <li>
                                <VectorHome id="vect19" className="vector" />
                                Italy
                            </li>
                            <li>
                                <VectorHome id="vect20" className="vector" />
                                The smell before it rains
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage