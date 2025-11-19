import { Link } from "react-router-dom"
import "./explore-tiers-page.scss"
import "../page.scss"

const ExploreTiersPage = () => {

    return(
        <div className="page" id="ExploreTiersPage">
            <h1 className="mt-0">BRAND IDENTITY SERVICES</h1>
            <p className="tiersIntro col-10">
                At Black Dahlia Creative, 
                we believe a brand is more than a logo.  
                It’s an experience. Each package is crafted to help you define your voice, refine your visuals, 
                and build a cohesive presence that’s unmistakably yours.
            </p>
            <p className="tiersIntro col-10">From concept to legacy, your brand deserves to be as extraordinary as your vision.</p>
            <div className="flex" id="cardsTierWrapper">
                <article className="singleTier">
                    <div>
                        <div className="flex flex-justifyContent-spaceBetween flex-alignItems-center tierWrapper">
                            <p className="tierText">Tier I</p>
                        </div>
                        <div className="tierDescription">
                            <h4 className="tierTitle">The Rebel Edit</h4>
                            <p className="tierDescText">
                                For brands ready to make their mark.  Clean, distinctive, and crafted with intention.
                                <ul>
                                    <li>Primary logo + secondary mark</li>
                                    <li>Curated color palette & typography suite</li>
                                    <li>Mini brand moodboard</li>
                                    <li>One concept refinement round</li>
                                    <li>Basic logo & color usage guide</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="flex col-12 flex-justifyContent-center">
                        <p className="primaryBtn-vr1 py-10 px-20">$1,500</p>
                    </div>
                </article>

                <article className="singleTier">
                    <div>
                        <div className="flex flex-justifyContent-spaceBetween flex-alignItems-center tierWrapper">
                            <p className="tierText">Tier II</p>
                            <p className="mostChosen">Most Chosen</p>
                        </div>
                        <div className="tierDescription">
                            <h4 className="tierTitle">The Signature <span className="col-12 text-end">Collection</span></h4>
                            <p className="tierDescText">
                                Timeless and refined.  A cohesive identity that captures your essence across touch points.
                                <ul>
                                    <li>Full logo suite (primary, secondary, sub mark)</li>
                                    <li>Brand color system + textures or patterns</li>
                                    <li>Extended mood board & creative direction</li>
                                    <li>Typography hierarchy & brand guide</li>
                                    <li>Tagline and tone of voice refinement</li>
                                    <li>Social profile design (icons, banners)</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="flex col-12 flex-justifyContent-center">
                        <p className="primaryBtn-vr1 py-10 px-20">$2,300</p>
                    </div>
                </article>

                <article className="singleTier">
                    <div>
                        <div className="flex flex-justifyContent-spaceBetween flex-alignItems-center tierWrapper">
                            <p className="tierText">Tier III</p>
                        </div>
                        <div className="tierDescription">
                            <h4 className="tierTitle">The Empire Reign</h4>
                            <p className="tierDescText">
                                A complete identity & strategy experience designed for lasting presence and impact.
                                <ul>
                                    <li>Complete identity system (logos, color, type, patterns, imagery)</li>
                                    <li>Comprehensive brand book (voice, vision, guidelines)</li>
                                    <li>Collateral design (cards, stationery, packaging)</li>
                                    <li>Social & marketing template suite</li>
                                    <li>Brand launch consultation & creative direction</li>
                                </ul>
                            </p>
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