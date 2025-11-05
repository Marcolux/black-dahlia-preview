import { Link } from "react-router-dom";
import './navigation-bar.scss'

const NavigationBar = () => {

    return (
        <div className="flex flex-alignItems-center flex-justifyContent-center navBar">
            <Link className="navLinks" to={'/'}><p>Home Page</p></Link>
            <Link className="navLinks" to={'/about'}><p>About</p></Link>
            <Link className="navLinks" to={'/services'}><p>Services</p></Link>
            <Link className="navLinks" to={'/portfolio'}><p>Portfolio</p></Link>
            <Link className="navLinks" to={'/contact'}><p>Contact</p></Link>
            <Link className="navLinks" to={'/membership'}><p>Membership</p></Link>
        </div>
    )
}

export default NavigationBar