import { Link } from "react-router-dom"
import "../page.scss"
import "./services-page.scss"

const ServicesPage = () => {

    return(
        <div className="page" id="ServicesPage">
            <h1>Services Page</h1>
                BLACK DAHLIA PREVIEW SITE

                <Link className="navLinks" to={'/services/explore-tiers'}><p>Explore Tiers Page</p></Link>
        </div>
    )
}

export default ServicesPage