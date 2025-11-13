import './footer.scss'

const Footer = () => {
    return (
        <div className='footer flex flex-justifyContent-spaceBetween px-40 pt-40 pb-25'>
           <p>©Black Dahlia Creative LLC.  All Rights Reserved</p>
           <img 
                src={`${process.env.PUBLIC_URL}/images/white_logo 1.png`} 
                alt="Black Dahlia white text logo" 
                style={{width: '200px', height: '45px', justifySelf: 'center'}}
            />
           <div >
                <img 
                    src={`${process.env.PUBLIC_URL}/images/icons/skill-icons_instagram.jpg`}  
                    style={{borderRadius: '8px', height: '30px'}}
                    alt=""
                />
                <img 
                    className='ml-15' 
                    src={`${process.env.PUBLIC_URL}/images/icons/logos_facebook.jpg`} 
                    style={{borderRadius: '50%', height: '30px'}}
                    alt="" 
                />
           </div>
        </div>
    )
}

export default Footer