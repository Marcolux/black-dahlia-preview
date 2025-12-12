import { ReactComponent as VectorHome } from './Vector.svg'
import { ReactComponent as BlinkingVectorHome } from './blinkingVector.svg'
import { useInView } from "react-intersection-observer"
import ButtonScribble from "../../components/ButtonScribble/ButtonScribble"
import "../page.scss"
import "./about-page.scss"

const AboutPage = () => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: false, // keep toggling when leaving/entering view
    })

    return(
        <div className="page" id="AboutPage">
            <section className="flex col-12" id="introAbout">
                <div className="flex flex-column col-8" id="leftIntro">
                    <div className="flex flex-column py-20">
                        <h1 className="page_sub-headers text-center">WHO IS</h1>
                        <h1 className="page_sub-headers text-center">BLACK DAHLIA?</h1>
                    </div>
                    <div className="flex py-50 col-12 flex-justifyContent-end" id="heyImTrish">
                        <div className="flex flex-column">
                            <p className="text-center">Hey!</p>
                            <p className="text-center">I'm Trish!</p>
                        </div>
                        <img id="aboutLndArrow" src={`${process.env.PUBLIC_URL}/images/about-page/ArrowVector.webp`} alt="Black Dahlia arrow vector"/>
                    </div>
                    <p id="intro-text" className="mb-50 fontSize22">
                        I was born and raised in Chicago, but have some pretty deep southern Italian roots!  
                        I often travel back and forth in between Chicago and Italy.  
                        Half my heart is here and half is there!  
                        And I adore having 2 totally different lives on different sides of the world.  
                    </p>
                </div>

                <div className="flex flex-column flex-alignItems-center" id="rightIntro">
                    <div className="flex m-25 p-25" id="pic">
                        <img  src={`${process.env.PUBLIC_URL}/images/about-page/BlackDahliaTrishPic.webp`} alt="Black Dahlia Trish"/>
                    </div>
                    <div id="spinningIntroAbt" className="col-12 flex">
                        <img id="spinner-1" src={`${process.env.PUBLIC_URL}/images/icons/dahlia_icon_charcoal.webp`} alt="Black Dahlia charcoal"/>
                        <img id="spinner-2" src={`${process.env.PUBLIC_URL}/images/icons/dahlia_icon_silver.webp`} alt="Black Dahlia silver"/>
                        <img id="spinner-3" src={`${process.env.PUBLIC_URL}/images/icons/dahlia_icon_biege.webp`} alt="Black Dahlia beige"/>
                        <img id="spinner-4" src={`${process.env.PUBLIC_URL}/images/icons/dahlia_icon_burgundy.webp`} alt="Black Dahlia burgundy"/>
                    </div>
                    <ButtonScribble 
                        className="primaryBtn-vr1 fontSize20 col-7 mt-45" 
                        to={'/contact'} 
                        scribbleShift="50px"
                        buttonBg="var(--black-dahlia-white)"
                        backColor="var(--secondary-color)"
                        lineColor="var(--secondary-color)"
                    >
                       BOOK NOW
                    </ButtonScribble>
                </div>

            </section>
            <section id="favorite_things" className="flex flex-column flex-alignItems-center">
                <h1 className="page_sec-headers-vr col-12 text-center">A Few of my Favorite things...</h1>
                <div className="flex flex-justifyContent-center py-50" id="cardWrapper">
                    <div className="flex flex-column" style={{height: '100%', justifyContent: 'space-between'}}>
                        <BlinkingVectorHome ref={ref} id="Blink_vector_1" className={ inView? 'is-active blink_vector' : 'blink_vector'} />
                        <BlinkingVectorHome ref={ref} id="Blink_vector_2" className={ inView? 'is-active blink_vector' : 'blink_vector'} />
                    </div>
                    <div className="flex flex-wrap" id="c_wrap">
                        <div className="singleCard col-4">
                            <ul className="pl-0">
                                <li><VectorHome id="vect1" className="vector" />Nature</li>
                                <li><VectorHome id="vect2" className="vector" />Travel</li>
                                <li><VectorHome id="vect3" className="vector" />My Family</li>
                                <li><VectorHome id="vect4" className="vector" />Chai Lattes</li>
                                <li><VectorHome id="vect5" className="vector" />Bonfires</li>
                                <li><VectorHome id="vect6" className="vector" />Mountains</li>
                                <li><VectorHome id="vect7" className="vector" />Elephants</li>
                                <li><VectorHome id="vect8" className="vector" />Black nails</li>
                                <li><VectorHome id="vect9" className="vector" />Nachos</li>
                                <li><VectorHome id="vect10" className="vector" />Journals</li>
                            </ul>
                        </div>
                        <div className="singleCard col-4">
                            <ul className="pl-0">
                                <li><VectorHome id="vect21" className="vector" />Crescent Moons</li>
                                <li><VectorHome id="vect22" className="vector" />A Starry night</li>
                                <li><VectorHome id="vect23" className="vector" />Pens & Markers</li>
                                <li><VectorHome id="vect24" className="vector" />Houseplants</li>
                                <li><VectorHome id="vect25" className="vector" />Stickers</li>
                                <li><VectorHome id="vect26" className="vector" />Books on a Bookshelf</li>
                                <li><VectorHome id="vect27" className="vector" />Sunglasses on the top of my head</li>
                                <li><VectorHome id="vect28" className="vector" />Gnomes</li>
                                <li><VectorHome id="vect29" className="vector" />The sound of Rain</li>
                                <li><VectorHome id="vect30" className="vector" />A Good Cozy Sweater</li>
                            </ul>
                        </div>
                        <div className="singleCard col-4">
                            <ul className="pl-0">
                                <li><VectorHome id="vect11" className="vector" />Planners</li>
                                <li><VectorHome id="vect12" className="vector" />Laughing until my Cheeks Hurt</li>
                                <li><VectorHome id="vect13" className="vector" />Music</li>
                                <li><VectorHome id="vect14" className="vector" />Hugs</li>
                                <li><VectorHome id="vect15" className="vector" />The crispness of Fall</li>
                                <li><VectorHome id="vect16" className="vector" />Lots of Pillows</li>
                                <li><VectorHome id="vect17" className="vector" />The color Black</li>
                                <li><VectorHome id="vect18" className="vector" />Pizza</li>
                                <li><VectorHome id="vect19" className="vector" />Italy</li>
                                <li><VectorHome id="vect20" className="vector" />The smell before it rains</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-column" style={{height: '100%', justifyContent: 'space-between'}}>
                        <BlinkingVectorHome ref={ref} id="Blink_vector_3" className={ inView? 'is-active blink_vector' : 'blink_vector'} />
                        <BlinkingVectorHome ref={ref} id="Blink_vector_4" className={ inView? 'is-active blink_vector' : 'blink_vector'} />
                    </div>
                </div>
            </section>
            <section id="journey_sec">

                <h1 className="page_sec-headers col-12 text-center"  id="journeyTitle">A JOURNEY FROM REINVENTION TO CREATION</h1>
                <div className="flex col-12" id="journey_wrapper">

                    <div id="article_wrapper" className="flex flex-column flex-alignItems-center col-10">

                        <article className="journey_articles col-12">
                            <h4 className="journey_titles">THE CREATIVE HEART</h4>
                            <p className="journey_texts">
                                I wasn’t always a designer, but I was always a creator!  
                                I was the kind of person who saw something beautiful and thought, 
                                “I could make that.” Over time, that instinct grew into a passion, 
                                and that passion eventually became Black Dahlia Creative.
                                Over the years, I’ve explored countless creative outlets: 
                                designing jewelry, crafting, photography, spinning fire, doing hair,  
                                even hot gluing twigs to a jar just to make a pretty pen holder. Creativity has always found its way into everything I do.
                            </p>
                        </article>
                        <article className="journey_articles col-12">
                            <h4 className="journey_titles">THE TURNING POINT</h4>
                            <p className="journey_texts">For most of my adult life, I bounced between the beauty and food industries. They paid the bills, but they never filled my cup. Before entering the design world, I worked as a Production Supervisor for a specialty food manufacturer. 
                                The people were wonderful, but I felt unfulfilled. 
                                My boss at the time hired a design company to rebrand his growing business, and when I saw the concept boards and brand books, something instantly clicked.
                                I remember thinking, “Huh… I could do this. Actually, I want to do this.”
                                And from that moment, the trajectory of my life began to change. 
                                I couldn’t stop thinking about it. 
                                With every rebranding presentation that came through the office, 
                                I found myself dreaming of a career where I could use my creativity and finally feel full again.
                            </p>
                        </article>
                        <article className="journey_articles col-12">
                            <h4 className="journey_titles">THE LEAP OF FAITH</h4>
                            <p className="journey_texts">
                                At 40, I took a leap of faith and walked away from a safe, familiar career to pursue graphic design.  
                                This was proof that it’s never too late to begin again. It was one of the scariest decisions of my life. That same year my daughter was starting high school, and my son was beginning third grade. While they were learning new lessons in their classrooms, I was stepping into a classroom of my own. . In my living room. On my computer. With a Design instructor and 16 other brand new design students.  
                                I was trading comfort for creativity and fear for purpose.
                                What began as a personal journey to fill my own cup became something greater.  
                                It also became a mission to show my children that nothing is impossible when you lead with heart, courage, and vision.
                            </p>
                        </article>
                        <article className="journey_articles col-12">
                            <h4 className="journey_titles">THE BLOOM OF BLACK DAHLIA</h4>
                            <p className="journey_texts">
                                Black Dahlia Creative was born from that belief: that the seed of change can be planted at any moment and, with care and vision, it will take root and bloom.
                                What began as a leap of faith has grown into a studio dedicated to helping others transform their ideas into something bold and flourishing. My cup is no longer empty.  It’s overflowing. Every new client reignites that spark inside me, the same one that once whispered, “You were meant for this.”
                                It’s never too late to start over, to build your own empire, or to create something beautiful in the process. You can dream and think, “What if I had done that?”  Or you can take the leap and do it.
                                If my story resonated with you, let’s begin creating your new journey together.The life you want begins the moment you stop waiting for the perfect time. You can keep dreaming of change… or plant the seed and watch it grow.  Let’s plant the seed together!
                            </p>
                        </article>
                    </div>

                    <div id="timeline_wrapper">
                        <div className="moon_phase" id="phase_1">
                            <img src={`${process.env.PUBLIC_URL}/images/about-page/phase_1.webp`} alt="Black Dahlia moon phases: phase 1" />
                        </div>
                        <div className="moon_phase" id="phase_2">
                            <img src={`${process.env.PUBLIC_URL}/images/about-page/phase_2.webp`} alt="Black Dahlia moon phases: phase 2" />
                        </div>
                        <div className="moon_phase" id="phase_3">
                            <img src={`${process.env.PUBLIC_URL}/images/about-page/phase_3.webp`} alt="Black Dahlia moon phases: phase 3" />
                        </div>
                        <div className="moon_phase" id="phase_4">
                            <img src={`${process.env.PUBLIC_URL}/images/about-page/phase_4.webp`} alt="Black Dahlia moon phases: phase 4" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-column col-12" id="journeyBottomSec">
                    <p>Schedule your complimentary Discovery Call today.</p>
                    <ButtonScribble 
                        className="primaryBtn fontSize20 mt-25" 
                        to={'/contact'}
                        scribbleShift="50px"
                        buttonBg="var(--alternative-black)"
                        backColor="var(--secondary-color)"
                        lineColor="var(--black-dahlia-white)"
                    >
                        BOOK NOW
                    </ButtonScribble>
                </div>
            </section>
            <section id="whatWaitFor">
                <div className="flex flex-column flex-alignItems-center" id="initialIntro">
                    <h4 className="col-12 text-center">WHAT ARE YOU WAITING FOR?</h4>
                    <h4 className="col-12 text-center">TAKE YOUR LEAP TODAY!</h4>
                    <h4 className="col-12 text-center">LET BLACK DAHLIA CREATIVE BRING YOUR VISION TO LIFE!</h4>
                    <h4 className="col-12 text-center">YOUR COMPLIMENTARY DISCOVERY CALL AWAITS YOU!</h4>
                </div>
                    <ButtonScribble className="primaryBtn-vr1 fontSize20 col-4" to={'/contact'} scribbleShift="50px">
                        Start your creative journey TODAY
                    </ButtonScribble>
                <p className="col-9 text-center" id="textBottom">
                    You can keep wishing for a different story,
                    or start writing the next chapter now.
                </p>
                <img id="spiningDahliaAboutPg" src={`${process.env.PUBLIC_URL}/images/about-page/dahlia_icon_biege 6.webp`} alt="Spining Dahlia About Page" />
            </section>
        </div>
    )
}

export default AboutPage