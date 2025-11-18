import { Link } from "react-router-dom"
import "../page.scss"
import "./services-page.scss"

const ServicesPage = () => {

    return(
        <div className="page" id="ServicesPage">
            <h1 id="servicesTitle">SERVICES ...</h1>
            <div className="flex flex-wrap col-12" id="servicesWrapper">

                <article className="servicesCard">
                    <div className="flex flex-column">
                        <h4 className="serviceTitle">LOGO DESIGN</h4>
                        <p className="serviceDescription">
                            Define your look, voice, and presence.This is your brand’s foundation...from concept to visual identity.
                            <br/>The three brand identity tiers are:
                            <ul>
                                <li>The Rebel Edit (foundational)</li>
                                <li>The Signature Collection (refined)</li>
                                <li>The Empire Reign (comprehensive)</li>
                            </ul>
                        </p>
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
                        <h4 className="serviceTitle">BRAND IDENTITY</h4>
                        <p className="serviceDescription">
                            Define your brand’s essence with a visual mark that captures who you are. 
                            Each logo begins with thoughtful research, concept exploration, and intentional design.
                            <br/>Includes:
                            <ul>
                                <li>1 primary logo design</li>
                                <li>2–3 initial concepts</li>
                                <li>Up to 3 revisions</li>
                                <li>Final logo files for print + digital use</li>
                            </ul>
                        </p>
                        <p>Investment: $500</p>
                    </div>
                </article>

                <article className="servicesCard">
                    <div className="flex flex-column">
                        <h4 className="serviceTitle">BOOK PUBLICATION</h4>
                        <p className="serviceDescription">
                            Bring your vision to life.  
                            From idea to publish ready design. 
                            Whether it’s a children’s book, journal, or planner, we craft beautifully 
                            formatted interiors and custom covers tailored for Amazon KDP or print.
                            <br/>Includes:
                            <ul>
                                <li>Cover design (front, spine, back)</li>
                                <li>Interior layout + typography setup</li>
                                <li>KDP-ready or print-ready export</li>
                            </ul>
                        </p>
                        <p>Investment: Starting at $600</p>
                    </div>
                </article>

                <article className="servicesCard">
                    <div className="flex flex-column">
                        <h4 className="serviceTitle">Web Design</h4>
                        <p className="serviceDescription">
                            Beautiful, user focused websites designed  to captivate and convert.
                            <br/>Package Includes:
                            <ul>
                                <li>Custom website design</li>
                                <li>Brand integration & typography setup</li>
                                <li>Optional post launch maintenance</li>
                            </ul>
                        </p>
                        <p>Investment: Starts at $3,000</p>
                    </div>
                    <Link className="navLinks primaryBtn-vr1" to={'/services/web-design-development'}>Explore More
                        <img      
                            src={`${process.env.PUBLIC_URL}/images/icons/Arrow-bk.png`} 
                            className="ml-20"
                        />
                    </Link>
                </article>

                <article className="servicesCard">
                    <div className="flex flex-column">
                        <h4 className="serviceTitle">Custom Planners</h4>
                        <p className="serviceDescription">
                            Beautifully designed planners, 
                            journals, and stationery created to inspire
                            organization and self expression.
                            <ul>
                                <li>Custom layout design for planner pages</li>
                                <li>Stationery (notebooks, cards, notepads,      
                                    Invitations, flyers, digital art prints)
                                </li>
                                <li>Optional branding integration for business or retail</li>
                            </ul>
                        </p>
                    </div>
                    <p>Investment: Depends on the scope of project</p>
                    <Link className="navLinks primaryBtn-vr1" to={'/contact'}>Inquire to begin
                        <img      
                            src={`${process.env.PUBLIC_URL}/images/icons/Arrow-bk.png`} 
                            className="ml-20"
                        />
                    </Link>
                </article>

                <article className="servicesCard">
                    <div className="flex flex-column">
                        <h4 className="serviceTitle">Menu Design</h4>
                        <p className="serviceDescription">
                            Thoughtfully designed service menus that reflect your brand’s essence.  
                            Polished, cohesive, and unmistakably yours. 
                            <ul>
                                <li>Custom layout design (single, folded, or multi page)</li>
                                <li>Typography & color palette aligned with your brand identity</li>
                                <li>Print ready + digital formats</li>
                                <li>Optional seasonal or service update add on</li>
                            </ul>
                        </p>
                        <p>Investment: $200 per page</p>
                    </div>
                </article>

                <article className="servicesCard">
                    <div className="flex flex-column">
                        <h4 className="serviceTitle">Event Branding</h4>
                        <p className="serviceDescription">
                            Bring your vision to life with a branded experience 
                            that feels intentional, elevated, and completely unforgettable. 
                            From intimate gatherings to grand celebrations, 
                            we create cohesive event identities that weave design, 
                            emotion, and storytelling into every detail.
                            <br/>What’s Included:
                            <ul>
                                <li>Event Identity Design...custom logo or monogram, bespoke typography, and curated color palette</li>
                                <li>Print & Digital Collateral...invitations, signage, menus, programs, social assets, and digital templates</li>
                                <li>Theme & Mood Development...visual direction, inspiration boards, and styling concepts</li>
                                <li>Optional Add-Ons...printing + production management, 
                                    on site design styling, day of coordination materials, 
                                    and post event brand extensions available upon request
                                </li>
                            </ul>
                        </p>
                        <p className="mt-10 mb-0">Investment: Starting at $2,000  (Final pricing varies based on scope, deliverables, and creative direction.)</p>
                        <p className="text-italic text-bold mt-10 mb-0">Note: Printing and production costs are not included in the base design fee. Full service print management is available upon request for a seamless, start to finish experience.</p>
                        <p className="mt-10 mb-0">Ideal For:</p>
                        <p className="mt-10 mb-0">Weddings • Brand Launches • Corporate Galas • Private Events • Experiential Pop-Ups</p>
                    </div>
                </article>
            </div>

        </div>
    )
}

export default ServicesPage