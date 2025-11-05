import { NavLink, useLocation } from "react-router-dom";
import './navigation-bar.scss'

const NavigationBar = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'

    

    return (
        <>  
        {
            isHome 
            ?
            <div className="navBar homeBar">
                <img id="homepage_logo" src={`${process.env.PUBLIC_URL}/images/black_dahlia_logo_v1.jpg`} alt="Black Dahlia Creative logo" />
                <NavLink className="navLinks" to={'/'}><p>Home Page</p></NavLink>
                <NavLink className="navLinks" to={'/about'}><p>About</p></NavLink>
                <NavLink className="navLinks" to={'/services'}><p>Services</p></NavLink>
                <NavLink className="navLinks" to={'/portfolio'}><p>Portfolio</p></NavLink>
                <NavLink className="navLinks" to={'/contact'}><p>Contact</p></NavLink>
                <NavLink className="navLinks" to={'/membership'}><p>Membership</p></NavLink>
            </div>
            :
            <div className="navBar notHome">
                <NavLink className="navLinks" to={'/'}><p>Home Page</p></NavLink>
                <NavLink className="navLinks" to={'/about'}><p>About</p></NavLink>
                <NavLink className="navLinks" to={'/services'}><p>Services</p></NavLink>
                <NavLink className="navLinks" to={'/portfolio'}><p>Portfolio</p></NavLink>
                <NavLink className="navLinks" to={'/contact'}><p>Contact</p></NavLink>
                <NavLink className="navLinks" to={'/membership'}><p>Membership</p></NavLink>
            </div>
        }
        </>
    )
}

export default NavigationBar