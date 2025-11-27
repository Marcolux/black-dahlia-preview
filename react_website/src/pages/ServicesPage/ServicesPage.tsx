import { Link } from "react-router-dom"
import "../page.scss"
import "./services-page.scss"

const ServicesPage = () => {

    return(
        <div className="page" id="ServicesPage">
            <h1 className="page_sub-headers my-30">SERVICES ...</h1>
            <div className="flex flex-wrap col-12 mt-50" id="servicesWrapper">

                
                <article className="servicesCard">
                    <div className="flex flex-column">
                        <h4 className="page_paragraphTitle">LOGO DESIGN</h4>
                        <p className="page_paragraphText flex flex-column">
                            Define your brand’s essence with a visual mark that captures who you are. 
                            Each logo begins with thoughtful research, concept exploration, and intentional design.
                            <span className="mt-10">Package Includes:</span>
                        </p>
                        <ul className="page_paragraphText mt-10">
                            <li>1 primary logo design</li>
                            <li>2–3 initial concepts</li>
                            <li>Up to 3 revisions</li>
                            <li>Final logo files for print + digital use</li>
                        </ul>
                    </div>
                    <p className="col-12"><strong>Investment:</strong> $500</p>
                </article>
                
                <article className="servicesCard">
                    <div className="flex flex-column">
                        <h4 className="page_paragraphTitle">BRAND IDENTITY</h4>
                        <p className="page_paragraphText flex flex-column">
                            Define your look, voice, and presence.This is your brand’s foundation...from concept to visual identity.
                            <span className="mt-10">The three brand identity tiers are:</span>
                        </p>
                            <ul className="page_paragraphText mt-10">
                                <li>The Rebel Edit (foundational)</li>
                                <li>The Signature Collection (refined)</li>
                                <li>The Empire Reign (comprehensive)</li>
                            </ul>
                    </div>
                    <Link className="navLinks primaryBtn-vr1 col-12" to={'/services/explore-tiers'}>Explore the Tiers 
                        <img      
                            src={`${process.env.PUBLIC_URL}/images/icons/Arrow-bk.png`} 
                            className="ml-20"
                        />  
                    </Link>
                </article>

                <article className="servicesCard">
                    <div className="flex flex-column">
                        <h4 className="page_paragraphTitle">BOOK PUBLICATION</h4>
                        <p className="page_paragraphText flex flex-column">
                            Bring your vision to life.  
                            From idea to publish ready design. 
                            Whether it’s a children’s book, journal, or planner, we craft beautifully 
                            formatted interiors and custom covers tailored for Amazon KDP or print.
                            <span className="mt-10">Package Includes:</span>
                        </p>
                            <ul className="page_paragraphText mt-10">
                                <li>Cover design (front, spine, back)</li>
                                <li>Interior layout + typography setup</li>
                                <li>KDP-ready or print-ready export</li>
                            </ul>
                        <p><strong>Investment:</strong> Starts at $600</p>
                    </div>
                </article>

                <article className="servicesCard">
                    <div className="flex flex-column">
                        <h4 className="page_paragraphTitle">Web Design</h4>
                        <p className="page_paragraphText flex flex-column">
                            Beautiful, user focused websites designed  to captivate and convert.
                            <span className="mt-10">Package Includes:</span>
                        </p>
                        <ul className="page_paragraphText mt-10">
                            <li>Custom website design</li>
                            <li>Brand integration & typography setup</li>
                            <li>Optional post launch maintenance</li>
                        </ul>
                        <p><strong>Investment:</strong> Starts at $3,000</p>
                    </div>
                    <Link className="navLinks primaryBtn-vr1 col-12" to={'/services/web-design-development'}>Explore More
                        <img      
                            src={`${process.env.PUBLIC_URL}/images/icons/Arrow-bk.png`} 
                            className="ml-20"
                        />
                    </Link>
                </article>

                <article className="servicesCard">
                    <div className="flex flex-column">
                        <h4 className="page_paragraphTitle">Custom Planners</h4>
                        <p className="page_paragraphText flex flex-column">
                            Beautifully designed planners, 
                            journals, and stationery created to inspire
                            organization and self expression.
                        </p>
                        <ul className="page_paragraphText mt-10">
                            <li>Custom layout design for planner pages</li>
                            <li>Stationery (notebooks, cards, notepads,      
                                Invitations, flyers, digital art prints)
                            </li>
                            <li>Optional branding integration for business or retail</li>
                        </ul>
                    </div>
                    <p><strong>Investment:</strong> Depends on the project</p>
                    {/* <Link className="navLinks primaryBtn-vr1 col-12" to={'/contact'}>Inquire to begin
                        <img      
                            src={`${process.env.PUBLIC_URL}/images/icons/Arrow-bk.png`} 
                            className="ml-20"
                        />
                    </Link> */}
                </article>

                <article className="servicesCard">
                    <div className="flex flex-column">
                        <h4 className="page_paragraphTitle">Menu Design</h4>
                        <p className="page_paragraphText flex flex-column">
                            Thoughtfully designed service menus that reflect your brand’s essence.  
                            Polished, cohesive, and unmistakably yours. 
                        </p>
                        <ul className="page_paragraphText mt-10">
                            <li>Custom layout design (single, folded, or multi page)</li>
                            <li>Typography & color palette aligned with your brand identity</li>
                            <li>Print ready + digital formats</li>
                            <li>Optional seasonal or service update add on</li>
                        </ul>
                        <p><strong>Investment:</strong> $200 per page</p>
                    </div>
                </article>

                <article className="servicesCard">
                    <div className="flex flex-column">
                        <h4 className="page_paragraphTitle">Event Branding</h4>
                        <p className="page_paragraphText flex flex-column">
                            Bring your vision to life with a branded experience 
                            that feels intentional, elevated, and completely unforgettable. 
                            From intimate gatherings to grand celebrations, 
                            we create cohesive event identities that weave design, 
                            emotion, and storytelling into every detail.
                            <span className="mt-10">What’s Included:</span>
                        </p>
                        <ul className="page_paragraphText mt-10">
                            <li>Event Identity Design...custom logo or monogram, bespoke typography, and curated color palette</li>
                            <li>Print & Digital Collateral...invitations, signage, menus, programs, social assets, and digital templates</li>
                            <li>Theme & Mood Development...visual direction, inspiration boards, and styling concepts</li>
                            <li>Optional Add-Ons...printing + production management, 
                                on site design styling, day of coordination materials, 
                                and post event brand extensions available upon request
                            </li>
                        </ul>
                        <p className="mt-20 mb-0 page_paragraphText">Ideal For:</p>
                        <p className="mt-0 mb-0 page_paragraphText">Weddings • Brand Launches • Corporate Galas • Private Events • Experiential Pop-Ups</p>
                        <p className="mt-20 page_paragraphText"><strong>Investment:</strong> Starts at $2,000  (Final pricing varies based on scope, deliverables, and creative direction.)</p>
                        <p className="text-italic text-bold mt-15 mb-0 page_paragraphText">Note: Printing and production costs are not included in the base design fee. Full service print management is available upon request for a seamless, start to finish experience.</p>
                    </div>
                </article>
            </div>

        </div>
    )
}

export default ServicesPage