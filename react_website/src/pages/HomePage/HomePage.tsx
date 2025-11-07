import { Link } from "react-router-dom"
import "../page.scss" 
import "./homepage.scss"

const HomePage = () => {

    return(
        <div className="page" id="HomePage">
            <section id="home_hero">
                <img src={`${process.env.PUBLIC_URL}/images/home-page/black-dahlia-landing_page_mockup.webp`}  alt="black dahlia landing hero" />
                <button id="landingBtn" className="primaryBtn">BOOK NOW</button>
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
                <img src={`${process.env.PUBLIC_URL}/images/home-page/black-dahlia-landing_page_mockup_2.webp`} alt="Black Dahlia on street wall" />
            </section>
            <section id="why-black-dahlia">
                <h1>why black dahlia</h1>
                <div></div>
            </section>
        </div>
    )
}

export default HomePage