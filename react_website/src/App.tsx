import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

//********** Components ************/ 
import NavigationBar from './components/NavigationBar/NavigationBar';
import NavigationBarSmallScreen from './components/NavigationBarSmallScreen/NavigationBarSmallScreen';
import Footer from './components/Footer/Footer';

//********** Pages ************/ 
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ExploreTiersPage from './pages/ExploreTiersPage/ExploreTiersPage';
import HomePage from './pages/HomePage/HomePage';
import MembershipPage from './pages/MembershipPage/MembershipPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import WebDesignDevPage from './pages/WebDesignDev/WebDesignDev';

//********** Styles ************/ 
import './style/App.scss';

function App() {
  const [smallScreenView, setSmallScreenView] = useState('Regular')
  const handleResize = () => {
    window.innerWidth < 768 ? setSmallScreenView('SmallScreen') : setSmallScreenView('Regular')
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => { 
      window.removeEventListener('resize', handleResize)
    }
  },[])

  return (
    <div className="App flex flex-column col-12">
      {
        smallScreenView === 'Regular'
        ?
        <NavigationBar/>
        :
        <NavigationBarSmallScreen/>
      }
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/portfolio" element={<PortfolioPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/membership" element={<MembershipPage/>} />
        <Route path="/services/explore-tiers" element={<ExploreTiersPage/>} />
        <Route path="/services/web-design-development" element={<WebDesignDevPage/>} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
