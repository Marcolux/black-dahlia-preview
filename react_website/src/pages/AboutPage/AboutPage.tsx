import { useInView } from "react-intersection-observer"
import ButtonScribble from "../../components/ButtonScribble/ButtonScribble"
import Mandala from '../../components/Mandala/Mandala'
import HomePageSeparator from '../../components/home-page-components/HomePageSeparator/HomePageSeparator'
import { ReactComponent as Dahlia } from "./mandala_dahlia.svg";
import "../page.scss"
import "./about-page.scss"

const AboutPage = () => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: false, // keep toggling when leaving/entering view
    })

    return(
        <div className="page" id="AboutPage">
            <section className="flex flex-column flex-justifyContent-spaceAround flex-alignItems-center col-12" id="introAbout">
                <Mandala/>
                <HomePageSeparator/>
                <div className="flex flex-column py-20 col-12 flex-alignItems-center" style={{rowGap: '20px'}}>
                    <h1 className="page_sub-headers text-center">WHO IS</h1>
                    <h1 className="page_sub-headers text-center">BLACK DAHLIA?</h1>
                </div>
                <HomePageSeparator/>
            </section>

            <section id='trishIntro' className='col-12 flex flex-column flex-alignItems-center py-50'>
                <div className="flex flex-column-md-down col-12 flex-justifyContent-center flex-alignItems-center" id="heyImTrish">
                    
                    <p className="text-right">Hey There!</p>
                    <div className="flex m-25 p-25" id="pic">
                        <img  src={`${process.env.PUBLIC_URL}/images/about-page/BlackDahliaTrishPic.png`} alt="Black Dahlia Trish"/>
                    </div>
                    <p className="text-left pt-50 mt-50">I'm Trish!</p>
                    
                </div>
                <HomePageSeparator/>
                <p id="intro-text" className="fontSize19 col-6 text-center">
                    I was born and raised in Chicago, but have some pretty deep southern Italian roots!  
                    I often travel back and forth in between Chicago and Italy.  
                    Half my heart is here and half is there!  
                    And I adore having 2 totally different lives on different sides of the world.  
                </p>
                <HomePageSeparator/>
            </section>

            <section id="journey_sec">

                <h1 className="page_sec-headers col-12 text-center"  id="journeyTitle">MY STORY</h1>
                

                    <div id="article_wrapper" className="flex flex-column flex-alignItems-center col-12">

                        <article className="journey_articles col-12">
                            <p className="journey_texts">
                                I wasn’t always a designer, but I’ve always been a creator. 
                                I’ve always been the kind of person who sees something beautiful and thinks, I could make that. 
                                Over time, that instinct grew into something deeper.  
                                A constant pull toward creativity that found its way into everything I did.
                            </p>
                        </article>
                        <article className="journey_articles col-12">
                            <p className="journey_texts">
                                I explored it in countless forms over the years.  
                                Designing jewelry, crafting, photography, doing hair, even hot gluing twigs to a jar just to make a pretty pen holder. 
                                Creativity was never just a hobby for me.  
                                It was how I moved through the world. 
                                Even when I worked in industries that paid the bills but didn’t quite fill my cup, that creative spark never went quiet.
                            </p>
                        </article>
                        <article className="journey_articles col-12">
                            <p className="journey_texts">
                                There was a moment, though.  
                                A quiet but powerful one.  
                                When everything shifted. 
                                I was working as a Production Supervisor in the specialty food industry when my boss hired a design company to rebrand his growing business. 
                                Seeing those concept boards and brand books felt like a door opening. 
                                I remember thinking, Huh… I could do this. 
                                Actually, I want to do this. 
                                From that point on, I couldn’t stop imagining a life where creativity wasn’t something I squeezed in around the edges, but something I led with.
                            </p>
                        </article>
                        <article className="journey_articles col-12">
                            <p className="journey_texts">
                                At 40, I took a leap of faith and walked away from a safe, familiar career to pursue graphic design. 
                                It was terrifying and also the most alive I had felt in years. 
                                While my daughter was starting high school and my son was beginning third grade, I was starting over too, learning in my own living room, on my own computer, alongside a group of brand new design students. 
                                I was trading comfort for purpose, and fear for something that finally felt aligned.
                            </p>
                        </article>
                        <article className="journey_articles col-12">
                            <p className="journey_texts">
                                What started as a personal journey to refill my own cup became something bigger. 
                                It became a mission to show my children, and myself, that it’s never too late to begin again. 
                                That the seed of change can be planted at any moment, and with care and vision, it will take root and bloom.
                            </p>
                        </article>
                        <article className="journey_articles col-12">
                            <p className="journey_texts">
                                Black Dahlia Creative grew from that belief. 
                                Today, it’s a studio dedicated to helping others transform their ideas into something bold, meaningful, and flourishing. 
                                My cup is no longer empty.  It’s overflowing!  
                                And with every new client, that quiet inner voice returns, gently reminding me: You were meant for this.
                            </p>
                        </article>
                        <article className="journey_articles col-12">
                            <p className="journey_texts">
                                If my story resonates with you, maybe you’re standing at your own turning point. 
                                Wondering what if, or feeling the pull to finally begin. 
                                You don’t have to wait for the perfect time. 
                                You can plant the seed now.
                            </p>
                        </article>
                        <article className="journey_articles col-12">
                            <p className="journey_texts">
                                Let’s grow something beautiful together!
                            </p>
                        </article>
                    </div>
            </section>
            <section id="whatWaitFor">
                <HomePageSeparator/>
                <div className="flex flex-column flex-alignItems-center py-50" id="initialIntro">
                    <h4 className="col-12 text-center">WHAT ARE YOU WAITING FOR?</h4>
                    <h4 className="col-12 text-center">TAKE YOUR LEAP TODAY!</h4>
                    <h4 className="col-12 text-center">LET BLACK DAHLIA CREATIVE BRING YOUR VISION TO LIFE!</h4>
                    <h4 className="col-12 text-center">YOUR COMPLIMENTARY DISCOVERY CALL AWAITS YOU!</h4>
                </div>
                <HomePageSeparator/>
                <ButtonScribble className="primaryBtn-vr1 fontSize20 my-40" to={'/contact'} scribbleShift="50px">
                    Start your creative journey TODAY
                </ButtonScribble>
                <div className='pt-20'>
                    <Dahlia
                        ref={ref} 
                        className={inView ? 'is-active aboutDahlia' : 'aboutDahlia'}
                    />
                </div>
            </section>
        </div>
    )
}

export default AboutPage