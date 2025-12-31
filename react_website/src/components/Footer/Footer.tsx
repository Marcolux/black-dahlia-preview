import { Link } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
    return (
        <div className='footer flex flex-justifyContent-spaceBetween'>
           <p>©Black Dahlia Creative LLC.  All Rights Reserved</p>
           <img id='footerLogo'
                src={`${process.env.PUBLIC_URL}/images/black_dahlia_white_logo.png`} 
                alt="Black Dahlia white text logo" 
                style={{width: '200px', height: '45px', justifySelf: 'center'}}
            />
           <div >
                <Link to={'https://www.instagram.com/blackdahliacreative/'} target='_blank'>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/icons/skill-icons_instagram.jpg`}  
                        style={{borderRadius: '8px', height: '30px'}}
                        alt="Instagram Icon"
                    />
                </Link>
                
                <Link to={'https://www.facebook.com/profile.php?id=61583890804072'} target='_blank'>
                    <img 
                        className='ml-15' 
                        src={`${process.env.PUBLIC_URL}/images/icons/logos_facebook.jpg`} 
                        style={{borderRadius: '50%', height: '30px'}}
                        alt="Facebook Icon" 
                    />
                </Link>
           </div>
        </div>
    )
}

export default Footer