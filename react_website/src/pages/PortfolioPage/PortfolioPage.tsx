import { ReactComponent as VectorHome } from "./Arrow 23.svg"
import FlippingCard from "../../components/FlippingCard/flippingCard"
import ButtonScribble from "../../components/ButtonScribble/ButtonScribble"
import "../page.scss"
import "./portfolio-page.scss"

const PortfolioPage = () => {

    return(
        <div className="page" id="PortfolioPage">

            <h1 className="page_sub-headers"> MOST RECENT WORK...</h1>
            <article className="flex flex-column col-12 flex-alignItems-center">
                <h4 className="page_sec-headers">Le Nicchie  (Restaurant Rebrand)</h4>
                <p className="col-12 col-md-11 col-lg-10 col-xl-9 page_paragraphText">
                    Located in the heart of Bari, Italy, Le Nicchie embodies timeless sophistication and modern Italian elegance. 
                    I led a complete visual refresh for the restaurant, 
                    redesigning the primary logo and introducing a refined monogram as a secondary mark to elevate the brand’s identity.
                    The new menus and collateral were thoughtfully crafted to reflect Le Nicchie’s elevated dining experience, 
                    pairing sleek typography with a rich black and gold palette for a sense of understated luxury. 
                    Every design choice was made to mirror the restaurant’s warm yet upscale atmosphere, 
                    creating a cohesive visual language that feels as exquisite as the cuisine itself.
                </p>
                <div className="flipping-card_wrapper col-12">
                    
                    <FlippingCard
                        classNameWrapper="pricing-card-wrapper"
                        classNameCard="pricing-card"
                        frontContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/nicchie_storefront 1.webp`}
                                alt={`Flip card front 1`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        backContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/nicchie_storeback 1.webp`}
                                alt={`Flip card back 1`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        frontTrigger={ <p>Explore more</p> }
                        backTrigger={<VectorHome/>}
                        closeOnOutsideClick={true}
                        id="card_top_1"
                    />

                    <FlippingCard
                        classNameWrapper="pricing-card-wrapper"
                        classNameCard="pricing-card"
                        frontContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/nicchie_menu2_front.webp`}
                                alt={`Flip card front 2`}
                                loading="lazy" 
                                decoding="async"
                            />

                        }
                        backContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/nicchie_menu2_back.webp`}
                                alt={`Flip card front 2`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        frontTrigger={ <p>Explore more</p> }
                        backTrigger={<VectorHome/>}
                        closeOnOutsideClick={true}
                        id="card_top_2"
                    />

                    <FlippingCard
                        classNameWrapper="pricing-card-wrapper"
                        classNameCard="pricing-card"
                        frontContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/nicchie_inside_restaurant_front.webp`}
                                alt={`Flip card front 3`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        backContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/nicchie_inside_restaurant_back.webp`}
                                alt={`Flip card front 3`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        frontTrigger={ <p>Explore more</p> }
                        backTrigger={<VectorHome/>}
                        closeOnOutsideClick={true}
                        id="card_top_3"
                    />

                    <FlippingCard
                        classNameWrapper="pricing-card-wrapper"
                        classNameCard="pricing-card"
                        frontContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/le_nicchie_front.webp`}
                                alt={`Flip card front 4`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        backContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/le_nicchie_back.webp`}
                                alt={`Flip card front 4`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        frontTrigger={ <p>Explore more</p> }
                        backTrigger={<VectorHome/>}
                        closeOnOutsideClick={true}
                        id="card_top_4"
                    />
                </div>
            </article>

            <article className="flex flex-column col-12 flex-alignItems-center mt-50 pt-40">
                <h4 className="page_sec-headers">Biophilic x Bauhaus  (Poster Design)</h4>
                <p className="col-12 col-md-11 col-lg-10 col-xl-9 page_paragraphText">
                    This client was in search of a poster that had an organic flow of biophilic design with the geometric precision of Bauhaus principles, 
                    creating a balanced study of nature and form. 
                    The composition celebrates structure and softness.  
                    Earthy textures, abstract shapes, and natural tones meet in a modern visual rhythm.
                    Designed to evoke calm and connection, the piece bridges the human desire for organic beauty with the timeless order of functional design.  
                    A seamless fusion of the natural world and modernist expression.
                </p>

                <div className="flipping-card_wrapper col-12 flex-justifyContent-center">
                    <FlippingCard
                        classNameWrapper="pricing-card-wrapper"
                        classNameCard="pricing-card"
                        frontContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/bauhaus_poster_front.webp`}
                                alt={`Bauhaus Poster card front`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        backContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/bauhaus_poster_back.webp`}
                                alt={`Bauhaus Poster card back`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        frontTrigger={ <p>Explore more</p> }
                        backTrigger={<VectorHome/>}
                        closeOnOutsideClick={true}
                        id="bauhaus_poster_card"
                    />
                </div>
            </article>

            <article className="flex flex-column col-12 flex-alignItems-center mt-50 pt-40">
                <h4 className="page_sec-headers">Traveler’s Tales Magazine</h4>
                <p className="col-12 col-md-11 col-lg-10 col-xl-9 page_paragraphText">
                    Created the cover and inside page layouts for a conceptual travel magazine, 
                    blending modern editorial design with refined visual storytelling. 
                    Each spread was designed to evoke the emotion of travel through carefully curated typography, 
                    photography, and color palette harmony.
                </p>

                <div className="flipping-card_wrapper col-12 ">
                    <FlippingCard
                        classNameWrapper="pricing-card-wrapper"
                        classNameCard="pricing-card"
                        frontContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/magazine_front_1.webp`}
                                alt={`Traveler's magazine card 1 front`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        backContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/magazine_back_1.webp`}
                                alt={`Traveler's magazine card 1 back`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        frontTrigger={ <p>Explore more</p> }
                        backTrigger={<VectorHome/>}
                        closeOnOutsideClick={true}
                        id="travelers_magazine_card"
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/images/portfolio/magazine_front_only.webp`}
                        alt={`Traveler's magazine card 2`}
                        loading="lazy" 
                        decoding="async"
                        className="pricing-card-wrapper"
                    />
                </div>
            </article>

            <article className="flex flex-column col-12 flex-alignItems-center mt-50 pt-40">
                <h4 className="page_sec-headers">Root & Ridge Magazine</h4>
                <p className="col-12 col-md-11 col-lg-10 col-xl-9 page_paragraphText">
                    Designed the cover and interior layout for Root & Ridge, 
                    a conceptual nature magazine celebrating the harmony between earth and design. 
                    Each spread pairs organic textures with refined typography, 
                    creating a visual rhythm that mirrors the calm and complexity of the natural world.
                </p>

                <div className="flipping-card_wrapper col-12 ">
                    <FlippingCard
                        classNameWrapper="pricing-card-wrapper"
                        classNameCard="pricing-card"
                        frontContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/root_ridge_card1_front.webp`}
                                alt={`Root & Ride Magazine card 1 front`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        backContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/root_ridge_card1_back.webp`}
                                alt={`Root & Ride Magazine card 1 back`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        frontTrigger={ <p>Explore more</p> }
                        backTrigger={<VectorHome/>}
                        closeOnOutsideClick={true}
                        id="rr_mag_card1"
                    />
                    <FlippingCard
                        classNameWrapper="pricing-card-wrapper"
                        classNameCard="pricing-card"
                        frontContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/root_ridge_card2_front.webp`}
                                alt={`Root & Ride Magazine card 2 front`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        backContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/root_ridge_card2_back.webp`}
                                alt={`Root & Ride Magazine card 2 back`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        frontTrigger={ <p>Explore more</p> }
                        backTrigger={<VectorHome/>}
                        closeOnOutsideClick={true}
                        id="rr_mag_card2"
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/images/portfolio/root_ridge_card4.webp`}
                        alt={`Root & Ride Magazine card 3`}
                            loading="lazy" 
                            decoding="async"
                            className="pricing-card-wrapper"
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/images/portfolio/root_ridge_card5.webp`}
                        alt={`Root & Ride Magazine card 4`}
                            loading="lazy" 
                            decoding="async"
                            className="pricing-card-wrapper"
                    />
                </div>
            </article>

            <article className="flex flex-column col-12 flex-alignItems-center mt-50 pt-40">
                <h4 className="page_sec-headers">2026 Plannner & Journal Collection</h4>
                <p className="col-12 col-md-11 col-lg-10 col-xl-9 page_paragraphText">
                    Designed for the dreamers and the doers, the Wild Notes and Wicked Notes 2026 collection blends the freedom of a journal with the structure of a planner.  
                    Two tools in one intentional design. Each piece celebrates both sides of creativity: the free spirited and the fiercely focused. 
                    With bold typography, rich textures, and refined layouts, this collection embodies the balance of clarity and chaos,  
                    inviting you to plan with purpose, write with passion, and create without limits.
                </p>

                <div className="flipping-card_wrapper col-12 ">
                    <FlippingCard
                        classNameWrapper="pricing-card-wrapper"
                        classNameCard="pricing-card"
                        frontContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/planner1_front.webp`}
                                alt={`Planners Card 1 front`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        backContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/planner1_back.webp`}
                                alt={`Planners Card 1 back`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        frontTrigger={ <p>Explore more</p> }
                        backTrigger={<VectorHome/>}
                        closeOnOutsideClick={true}
                        id="planner_card1"
                    />
                    <FlippingCard
                        classNameWrapper="pricing-card-wrapper"
                        classNameCard="pricing-card"
                        frontContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/planner2_front.webp`}
                                alt={`Planners Card 2 front`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        backContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/planner2_back.webp`}
                                alt={`Planners Card 2 back`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        frontTrigger={ <p>Explore more</p> }
                        backTrigger={<VectorHome/>}
                        closeOnOutsideClick={true}
                        id="planner_card2"
                    />
                    <FlippingCard
                        classNameWrapper="pricing-card-wrapper"
                        classNameCard="pricing-card"
                        frontContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/planner3_front.webp`}
                                alt={`Planners Card 3 front`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        backContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/planner3_back.webp`}
                                alt={`Planners Card 3 back`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        frontTrigger={ <p>Explore more</p> }
                        backTrigger={<VectorHome/>}
                        closeOnOutsideClick={true}
                        id="planner_card3"
                    />
                    <FlippingCard
                        classNameWrapper="pricing-card-wrapper"
                        classNameCard="pricing-card"
                        frontContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/planner4_front.webp`}
                                alt={`Planners Card 4 front`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        backContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/planner4_back.webp`}
                                alt={`Planners Card 4 back`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        frontTrigger={ <p>Explore more</p> }
                        backTrigger={<VectorHome/>}
                        closeOnOutsideClick={true}
                        id="planner_card4"
                    />
                </div>
            </article>

            <article className="flex flex-column col-12 flex-alignItems-center mt-50 pt-40">
                <h4 className="page_sec-headers">Italian Children’s Book</h4>
                <p className="col-12 col-md-11 col-lg-10 col-xl-9 page_paragraphText">
                    A vibrant exploration of language and culture, 
                    this project combines playful illustration with simple Italian vocabulary to create an engaging early learning experience. 
                    Designed as a first-words concept book, it balances color, clarity, and cultural charm, 
                    while blending educational purpose with creative storytelling through thoughtful visual design.
                </p>

                <div className="flipping-card_wrapper col-12 flex-justifyContent-center">
                    <FlippingCard
                        classNameWrapper="pricing-card-wrapper"
                        classNameCard="pricing-card"
                        frontContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/italian_book_front.webp`}
                                alt={`Italian's children book front`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        backContent={
                            <img
                                src={`${process.env.PUBLIC_URL}/images/portfolio/italian_book_back.webp`}
                                alt={`Italian's children book back`}
                                loading="lazy" 
                                decoding="async"
                            />
                        }
                        frontTrigger={ <p>Explore more</p> }
                        backTrigger={<VectorHome/>}
                        closeOnOutsideClick={true}
                        id="italian_book"
                    />
                </div>
            </article>

            <article className="flex flex-column col-12 flex-alignItems-center my-50 py-40" id="bottom_portfolio">
                <p className="col-12 col-md-11 col-lg-10 col-xl-9 page_paragraphTitle">
                    Want to work together?  
                </p>
                <p className="col-12 col-md-11 col-lg-10 col-xl-9 page_paragraphTitle my-10">
                    Let’s create something beautiful! . Reach out Now!
                </p>
                <p id="scheduleText" className="mt-50 mb-10">Schedule your complimentary Discover Call TODAY!</p>
                    <ButtonScribble 
                        className="primaryBtn-vr1 mt-50" 
                        to={'/portfolio'} 
                        scribbleShift="50px"
                        buttonBg="var(--black-dahlia-white)"
                        backColor="var(--secondary-color)"
                        lineColor="var(--secondary-color)"
                    >
                        BOOK NOW
                    </ButtonScribble>
                
            </article>

        </div>
    )
}

export default PortfolioPage