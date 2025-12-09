import { NavLink, useLocation } from "react-router-dom";
import './navigation-bar-small-screen.scss'
import { useState } from "react";
import { useTransition, animated } from "@react-spring/web";

const NavigationBarSmallScreen = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const toggleLogic = () => {
        setIsExpanded(prevState => !prevState)
    }
    const transitions = useTransition(isExpanded, {
        from: { opacity: 0, height: '100dvh', width: '0vw' },
        enter: { opacity: 1, height: '100dvh', width: '50vw' },
        leave: { opacity: 0, height: '100dvh', width: '0vw' },
        config: { duration: 200 },
    })
    
    const {pathname} = useLocation()
    const isDark = pathname !== '/about'

    return (
        <div id="smallScreenWrapper" className={ isDark ? 'dkBg': 'lightBg'}>
            <div className='hambContainer' onClick={toggleLogic}>
                <div className={isExpanded  ? 'hamburger-menu openHam':'hamburger-menu'}>
                    <div className="bar" id="bar1"></div>
                    <div className="bar" id="bar2"></div>
                    <div className="bar" id="bar3"></div>
                </div>
            </div>
            {transitions((style, condition) =>
                condition ? (
                    <animated.div style={style} id="smallScreenMenu" >
                        <div className='navBarSm'>
                            <NavLink className="navLinksSmScreen" to={'/'} onClick={toggleLogic}><p>Home Page</p></NavLink>
                            <NavLink className="navLinksSmScreen" to={'/about'} onClick={toggleLogic}><p>About</p></NavLink>
                            <NavLink className="navLinksSmScreen" to={'/services'} onClick={toggleLogic}><p>Services</p></NavLink>
                            <NavLink className="navLinksSmScreen" to={'/portfolio'} onClick={toggleLogic}><p>Portfolio</p></NavLink>
                            <NavLink className="navLinksSmScreen" to={'/contact'} onClick={toggleLogic}><p>Contact</p></NavLink>
                            <NavLink className="navLinksSmScreen" to={'/membership'} onClick={toggleLogic}><p>Membership</p></NavLink>
                        </div>
                    </animated.div>
                ) : null
            )}
            
        </div>
    )
}

export default NavigationBarSmallScreen