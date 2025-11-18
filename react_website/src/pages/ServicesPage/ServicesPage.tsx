import { Link } from "react-router-dom"
import "../page.scss"
import "./services-page.scss"

const ServicesPage = () => {

    return(
        <div className="page" id="ServicesPage">
            <h1 id="servicesTitle">SERVICES ...</h1>
            <div className="flex flex-wrap col-12" id="servicesWrapper">
                <div className="servicesCard col-4">
                    <h4 className="serviceTitle">BRAND IDENTITY</h4>
                    <p className="serviceDescription">
                        Define your look, voice, and presence.This is your brand’s foundation...from concept to visual identity.
                        The three brand identity tiers are:
                        <ul>
                            <li>The Rebel Edit (foundational)</li>
                            <li>The Signature Collection (refined)</li>
                            <li>The Empire Reign (comprehensive)</li>
                        </ul>
                    </p>
                    <Link className="navLinks primaryBtn-vr1" to={'/services/explore-tiers'}>Explore the Tiers 
                        <img      
                            src={`${process.env.PUBLIC_URL}/images/icons/Arrow-bk.png`} 
                            className="ml-20"
                        />  
                    </Link>
                </div>

            </div>

                <Link className="navLinks primaryBtn-vr1" to={'/services/web-design-development'}>Explore More
                    <img      
                        src={`${process.env.PUBLIC_URL}/images/icons/Arrow-bk.png`} 
                        className="ml-20"
                    />
                </Link>
        </div>
    )
}

export default ServicesPage