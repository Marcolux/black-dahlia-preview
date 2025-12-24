import { Link } from "react-router-dom"
import "../page.scss"
import "./web-design-dev.scss"
import ButtonScribble from "../../components/ButtonScribble/ButtonScribble"

const WebDesignDevPage = () => {

    return(
        <main className="page" id="WebDesignDevPage">
            <article className="singleTier col-12">
                <div className="tierDescription">
                    <h4 className="page_paragraphTitle mb-30">Web Design & Development</h4>
                    <p className="page_paragraphText">
                        Elevate your online presence with a website designed for both beauty and performance. Each site is crafted to reflect your brand’s unique identity while delivering a seamless, user focused experience that captivates and converts.
                    </p>    
                    <p className="page_paragraphText mt-20">Package Includes:</p>
                    <ul className="page_paragraphText mt-10">
                        <li>Website strategy and creative direction</li>
                        <li>Custom website design within Figma</li>
                        <li>Complete web development (coded build for performance, SEO, and scalability)</li>
                        <li>Brand integration & typography system</li>
                        <li>Mobile and tablet optimization</li>
                        <li>Optional post launch maintenance and updates</li>
                    </ul>
                    <p className="page_paragraphText mt-20">Investment Options:</p>
                    <ul className="page_paragraphText mt-10">
                        <li>Design Only: Starts at $2,000 (Figma mockup and handoff ready design)</li>
                        <li>Design + Development: Starts at $4,000 (fully coded, responsive website across all platforms)</li>
                    </ul>
                    <p className="page_paragraphText mt-20">Optional Add Ons:</p>
                    <ul className="page_paragraphText mt-10">
                        <li>Domain setup and configuration</li>
                        <li>Monthly maintenance plans available for ongoing updates and site health monitoring</li>
                    </ul>
                    <p className="page_paragraphText mt-30">Note: Ongoing maintenance plans are available at $100–$150 per month, covering routine updates, SEO adjustments, and performance monitoring to keep your website running smoothly and up to date.</p>
                </div>

                <ButtonScribble 
                    className="primaryBtn-vr1 col-11 mt-45" 
                    to={'/contact'} 
                    scribbleShift="50px"
                    buttonBg="var(--black-dahlia-white)"
                    backColor="var(--secondary-color)"
                    lineColor="var(--secondary-color)"
                >
                    Book Now
                </ButtonScribble>
            </article>
        </main>
    )
}

export default WebDesignDevPage