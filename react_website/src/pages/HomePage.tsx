import "./page.scss" 

const HomePage = () => {

    return(
        <div className="page flex flex-justifyContent-center flex-alignItems-center">
            <img src={`${process.env.PUBLIC_URL}/images/Dahlia_icon 2.svg`} alt="logo"  style={{width: '300px', height: 'auto'}}  className="spin"/>

            <h1 className="fontSize40 col-12 text-center" id="coming_soon">- BLACK DAHLIA CREATIVE -</h1>
                
            <h4 className="fontSize30 mt-10 col-12 text-center" id="under_construction"> Website under construction </h4>
        </div>
    )
}

export default HomePage