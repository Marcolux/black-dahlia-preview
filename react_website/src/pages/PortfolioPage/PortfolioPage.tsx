import "../page.scss"
import "./portfolio-page.scss"
import FlippingCard from "../../components/FlippingCard/flippingCard"
import { ReactComponent as VectorHome } from "./Arrow 23.svg"

const PortfolioPage = () => {

    return(
        <div className="page" id="PortfolioPage">
            <h1>Portfolio Page</h1>
            <div className="flipping-card_wrapper col-12">
                
                <FlippingCard
                    classNameWrapper="pricing-card-wrapper"
                    classNameCard="pricing-card"
                    frontContent={
                        <img
                            src={`${process.env.PUBLIC_URL}/images/portfolio/nicchie_storefront 1.png`}
                            alt={`Flip card front 1`}
                        />
                    }
                    backContent={
                        <img
                            src={`${process.env.PUBLIC_URL}/images/portfolio/nicchie_storeback 1.png`}
                            alt={`Flip card back 1`}
                        />
                    }
                    frontTrigger={
                        <p>Explore more</p>
                    }
                    backTrigger={<VectorHome/>}
                    closeOnOutsideClick={true} // or false if you want it to stay flipped
                    id="card_top_1"
                />

                <FlippingCard
                    classNameWrapper="pricing-card-wrapper"
                    classNameCard="pricing-card"
                    frontContent={
                        <img
                            src={`${process.env.PUBLIC_URL}/images/portfolio/nicchie_menu2_front.png`}
                            alt={`Flip card front 1`}
                        />

                    }
                    backContent={
                        <img
                            src={`${process.env.PUBLIC_URL}/images/portfolio/nicchie_menu2_back.png`}
                            alt={`Flip card front 1`}
                        />
                    }
                    frontTrigger={
                        <p>Explore more</p>
                    }
                    backTrigger={<VectorHome/>}
                    closeOnOutsideClick={true} // or false if you want it to stay flipped
                    id="card_top_2"
                />

                <FlippingCard
                    classNameWrapper="pricing-card-wrapper"
                    classNameCard="pricing-card"
                    frontContent={
                        <img
                            src={`${process.env.PUBLIC_URL}/images/portfolio/nicchie_inside_restaurant_front.png`}
                            alt={`Flip card front 1`}
                        />
                    }
                    backContent={
                        <img
                            src={`${process.env.PUBLIC_URL}/images/portfolio/nicchie_inside_restaurant_back.png`}
                            alt={`Flip card front 1`}
                        />
                    }
                    frontTrigger={
                        <p>Explore more</p>
                    }
                    backTrigger={<VectorHome/>}
                    closeOnOutsideClick={true} // or false if you want it to stay flipped
                    id="card_top_3"
                />

                <FlippingCard
                    classNameWrapper="pricing-card-wrapper"
                    classNameCard="pricing-card"
                    frontContent={
                        <img
                            src={`${process.env.PUBLIC_URL}/images/portfolio/le_nicchie_front.png`}
                            alt={`Flip card front 1`}
                        />
                    }
                    backContent={
                        <img
                            src={`${process.env.PUBLIC_URL}/images/portfolio/le_nicchie_back.png`}
                            alt={`Flip card front 1`}
                        />
                    }
                    frontTrigger={
                        <p>Explore more</p>
                    }
                    backTrigger={<VectorHome/>}
                    closeOnOutsideClick={true} // or false if you want it to stay flipped
                    id="card_top_4"
                />
            </div>
        </div>
    )
}

export default PortfolioPage