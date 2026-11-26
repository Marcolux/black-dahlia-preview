import "../page.scss"
import "./lab-page.scss"

import MandalaDahlia from "../../components/Mandala/MandalaDahlia"
import HomePageSeparator from "../../components/home-page-components/HomePageSeparator/HomePageSeparator"
import ButtonScribble from "../../components/ButtonScribble/ButtonScribble"
import { useEffect } from "react"

// https://image-converter-api-vmmj.onrender.com/convert

const LabPage = () => {
    useEffect(() => {
        fetch("https://image-converter-api-vmmj.onrender.com/health", { method: 'GET'})
    }, [])
    
    return(
        <main className="page" id="LabPage">
            <section className="flex flex-column flex-justifyContent-spaceAround flex-alignItems-center col-12" id="introPortfolio">
                <MandalaDahlia/>
                <HomePageSeparator/>
                <div className="flex flex-column py-20 col-12 flex-alignItems-center">
                    <h1 className="page_sub-headers text-center">Black Dahlia Lab</h1>
                </div>
                <HomePageSeparator/>
            </section>
            <article className="flex flex-column col-12 flex-alignItems-center pt-50">


                    <h4 className="page_sec-headers">Image Converter</h4>
                    <p className="col-12 col-md-11 col-lg-10 col-xl-9 page_paragraphText">
                        Large photos slow websites down. This tool resizes and compresses your images so they
                        load fast and still look sharp. Choose a format and a maximum file size: it finds the
                        highest quality that fits.
                    </p>
                    <p className="col-12 col-md-11 col-lg-10 col-xl-9 page_paragraphText">
                        Upload JPEG, PNG, WebP, GIF, TIFF or iPhone HEIC photos, up to 25 MB each and 15 at a time,
                        and download them as WebP, AVIF, JPEG or PNG. Your images are never stored, and location
                        data from phone photos is removed automatically.
                    </p>
                    <ButtonScribble 
                        className="primaryBtn-vr1 mt-30-lg mt-10 ml-20-md" 
                        to={'/lab/image-converter'} 
                        scribbleShift="50px"
                        buttonBg="var(--black-dahlia-white)"
                        backColor="var(--alternative-black)"
                        lineColor="var(--alternative-black)"
                    >
                        Give it a shot
                    </ButtonScribble>
            </article>
        </main>
    )
}

export default LabPage