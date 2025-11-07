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
                <div id="upper_home_bar"
                >
                    <img id="homepage_logo" src={`${process.env.PUBLIC_URL}/images/black_dahlia_logo_v1.jpg`} alt="Black Dahlia Creative logo"/>
                    <div id="dahlia_logo_wrapper">
                        <img id="homepage_dahlia_logo" src={`${process.env.PUBLIC_URL}/images/dahlia_icon_logo.svg`} alt="Black Dahlia Creative logo"/>
                    </div>
                    <button className="primaryBtn"> GET IN TOUCH</button>
                </div>
                <div id="homePageLinks" className="flex">
                    {/* <NavLink className="navLinks" to={'/'}><p>Home Page</p></NavLink> */}
                    <NavLink className="navLinks" to={'/about'}><p>About</p></NavLink>
                    <NavLink className="navLinks" to={'/services'}><p>Services</p></NavLink>
                    <NavLink className="navLinks" to={'/portfolio'}><p>Portfolio</p></NavLink>
                    <NavLink className="navLinks" to={'/contact'}><p>Contact</p></NavLink>
                    <NavLink className="navLinks" to={'/membership'}><p>Membership</p></NavLink>
                </div>
            </div>
            :
            <div className="navBar notHome">
                <img id="navbar_logo" src={`${process.env.PUBLIC_URL}/images/white_logo 1.png`} alt="Black Dahlia Creative logo White"/>
                 <div id="homePageLinks" className="flex">
                    <NavLink className="navLinks" to={'/'}><p>Home Page</p></NavLink>
                    <NavLink className="navLinks" to={'/about'}><p>About</p></NavLink>
                    <NavLink className="navLinks" to={'/services'}><p>Services</p></NavLink>
                    <NavLink className="navLinks" to={'/portfolio'}><p>Portfolio</p></NavLink>
                    <NavLink className="navLinks" to={'/contact'}><p>Contact</p></NavLink>
                    <NavLink className="navLinks" to={'/membership'}><p>Membership</p></NavLink>
                 </div>
            </div>
        }
        </>
    )
}

export default NavigationBar