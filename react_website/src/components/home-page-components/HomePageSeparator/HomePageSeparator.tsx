import './home-page-separator.scss'

const HomePageSeparator = () => {
    
    return (
        <div className={ 'IntroSmScreen my-25'} >
            <img
                className="circlesSmScreen"
                src={`${process.env.PUBLIC_URL}/images/home-page/circlesSmScreen.svg`}
                alt={`Dahlia Small Screen Intro`}
                loading="lazy" 
                decoding="async"
            />
        </div>
    )
}

export default HomePageSeparator