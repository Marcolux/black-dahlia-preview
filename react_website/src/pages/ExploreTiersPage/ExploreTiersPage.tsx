import { Link } from "react-router-dom"
import "./explore-tiers-page.scss"
import "../page.scss"

const ExploreTiersPage = () => {

    return(
        <div className="page" id="ExploreTiersPage">
            <h1 className="mt-0 mb-30 page_sub-headers">BRAND IDENTITY SERVICES</h1>
            <p className="col-10 page_paragraphTitle-vr">
                At Black Dahlia Creative, 
                we believe a brand is more than a logo.  
                It’s an experience. Each package is crafted to help you define your voice, refine your visuals, 
                and build a cohesive presence that’s unmistakably yours.
            </p>
            <p className="col-10 page_paragraphTitle-vr mt-35">From concept to legacy, your brand deserves to be as extraordinary as your vision.</p>
            <div className="flex" id="cardsTierWrapper">
                <article className="singleTier">
                    <div>
                        <div className="flex flex-justifyContent-spaceBetween flex-alignItems-center tierWrapper">
                            <p className="page_paragraphText tier">Tier I</p>
                        </div>
                        <div className="tierDescription mt-15">
                            <h4 className="page_paragraphTitle">The Rebel Edit</h4>
                            <p className="page_paragraphText mt-30">
                                For brands ready to make their mark.  Clean, distinctive, and crafted with intention.
                            </p>
                            <ul className="page_paragraphText mt-10">
                                <li>Primary logo + secondary mark</li>
                                <li>Curated color palette & typography suite</li>
                                <li>Mini brand moodboard</li>
                                <li>One concept refinement round</li>
                                <li>Basic logo & color usage guide</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex col-12 flex-justifyContent-center">
                        <p className="primaryBtn-vr1 py-10 px-20">$1,500</p>
                    </div>
                </article>

                <article className="singleTier">
                    <div>
                        <div className="flex flex-justifyContent-spaceBetween flex-alignItems-center tierWrapper">
                            <p className="page_paragraphText tier">Tier II</p>
                            <p className="mostChosen">Most Chosen</p>
                        </div>
                        <div className="tierDescription mt-15">
                            <h4 className="page_paragraphTitle">The Signature <span className="col-12 text-end">Collection</span></h4>
                            <p className="page_paragraphText mt-30">
                                Timeless and refined.  A cohesive identity that captures your essence across touch points.
                            </p>
                            <ul className="page_paragraphText mt-10">
                                <li>Full logo suite (primary, secondary, sub mark)</li>
                                <li>Brand color system + textures or patterns</li>
                                <li>Extended mood board & creative direction</li>
                                <li>Typography hierarchy & brand guide</li>
                                <li>Tagline and tone of voice refinement</li>
                                <li>Social profile design (icons, banners)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex col-12 flex-justifyContent-center">
                        <p className="primaryBtn-vr1 py-10 px-20">$2,300</p>
                    </div>
                </article>

                <article className="singleTier">
                    <div>
                        <div className="flex flex-justifyContent-spaceBetween flex-alignItems-center tierWrapper">
                            <p className="page_paragraphText tier">Tier III</p>
                        </div>
                        <div className="tierDescription mt-15">
                            <h4 className="page_paragraphTitle">The Empire Reign</h4>
                            <p className="page_paragraphText mt-30">
                                A complete identity & strategy experience designed for lasting presence and impact.
                            </p>
                            <ul className="page_paragraphText mt-10">
                                <li>Complete identity system (logos, color, type, patterns, imagery)</li>
                                <li>Comprehensive brand book (voice, vision, guidelines)</li>
                                <li>Collateral design (cards, stationery, packaging)</li>
                                <li>Social & marketing template suite</li>
                                <li>Brand launch consultation & creative direction</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex col-12 flex-justifyContent-center">
                        <p className="primaryBtn-vr1 py-10 px-20">$4,500</p>
                    </div>
                </article>
            </div>

            <Link 
                to={'/contact'} 
                className="primaryBtn-vr1 fontSize20 col-11 mt-45"
            >INQUIRE ABOUT ONE OF THESE PACKAGES</Link>
           
        </div>
    )
}

export default ExploreTiersPage