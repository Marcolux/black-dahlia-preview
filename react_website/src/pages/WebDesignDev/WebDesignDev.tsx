import { Link } from "react-router-dom"
import "../page.scss"
import "./web-design-dev.scss"

const WebDesignDevPage = () => {

    return(
        <main className="page" id="WebDesignDevPage">
            <article className="singleTier col-12">
                <div className="tierDescription">
                    <h4 className="tierTitle mt-0">Web Design & Development</h4>
                    <p className="tierDescText">
                        Elevate your online presence with a website designed for both beauty and performance. Each site is crafted to reflect your brand’s unique identity while delivering a seamless, user focused experience that captivates and converts.
                        <br/><br/>Package Includes:
                        <ul>
                            <li>Website strategy and creative direction</li>
                            <li>Custom website design within Figma</li>
                            <li>Complete web development (coded build for performance, SEO, and scalability)</li>
                            <li>Brand integration & typography system</li>
                            <li>Mobile and tablet optimization</li>
                            <li>Optional post launch maintenance and updates</li>
                        </ul>
                        <br/>Investment Options:
                        <ul>
                            <li>Design Only: Starts at $3,000 (Figma mockup and handoff ready design)</li>
                            <li>Design + Development: Starts at $4,000 (fully coded, responsive website across all platforms)</li>
                        </ul>
                        <br/>Optional Add Ons:
                        <ul>
                            <li>Domain setup and configuration</li>
                            <li>Monthly maintenance plans available for ongoing updates and site health monitoring</li>
                        </ul>
                        <br/>Note: Ongoing maintenance plans are available at $100–$150 per month, covering routine updates, SEO adjustments, and performance monitoring to keep your website running smoothly and up to date.
                    </p>
                </div>
                <Link 
                    to={'/contact'} 
                    className="primaryBtn-vr1 fontSize20 mt-45"
                >Book Now</Link>
            </article>
        </main>
    )
}

export default WebDesignDevPage