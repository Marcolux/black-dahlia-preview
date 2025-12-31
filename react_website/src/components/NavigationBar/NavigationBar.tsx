import { NavLink, useLocation } from "react-router-dom";
import './navigation-bar.scss'

const NavigationBar = () => {
    return (
        <div className="navBar">
            <NavLink className="navLinks logoLink" to={'/'}>
                <img id="navbar_logo" src={`${process.env.PUBLIC_URL}/images/black_dahlia_white_logo.png`} alt="Black Dahlia Creative logo White"/>
            </NavLink>
        
            <div id="homePageLinks" className="flex">
                <NavLink className="navLinks" to={'/about'}><p>About</p></NavLink>
                <NavLink className="navLinks" to={'/services'}><p>Services</p></NavLink>
                <NavLink className="navLinks" to={'/portfolio'}><p>Portfolio</p></NavLink>
                <NavLink className="navLinks" to={'/contact'}><p>Contact</p></NavLink>
                <NavLink className="navLinks" to={'/membership'}><p>Membership</p></NavLink>
            </div>
        </div>
    )
}

export default NavigationBar