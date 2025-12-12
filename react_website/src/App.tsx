import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence } from "framer-motion"
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollTop'

//********** Components ************/
import NavigationBar from './components/NavigationBar/NavigationBar'
import NavigationBarSmallScreen from './components/NavigationBarSmallScreen/NavigationBarSmallScreen'
import Footer from './components/Footer/Footer'
//********** Pages ************/ 
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import ExploreTiersPage from './pages/ExploreTiersPage/ExploreTiersPage'
import HomePage from './pages/HomePage/HomePage'
import MembershipPage from './pages/MembershipPage/MembershipPage'
import PortfolioPage from './pages/PortfolioPage/PortfolioPage'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import WebDesignDevPage from './pages/WebDesignDev/WebDesignDev'

//********** Styles ************/
import './style/App.scss'

function App() {
  const [smallScreenView, setSmallScreenView] = useState('Regular')
  const location = useLocation()

  const handleResize = () => {
    window.innerWidth < 800
      ? setSmallScreenView('SmallScreen')
      : setSmallScreenView('Regular')
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="App col-12">
      <div id='navWrapper' >

        {smallScreenView === 'Regular'
          ? <NavigationBar />
          : <NavigationBarSmallScreen />
        }
      </div>

      <AnimatePresence mode="wait">
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/portfolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
          <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
          <Route path="/membership" element={<PageTransition><MembershipPage /></PageTransition>} />
          <Route path="/services/explore-tiers" element={<PageTransition><ExploreTiersPage /></PageTransition>} />
          <Route path="/services/web-design-development" element={<PageTransition><WebDesignDevPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default App
