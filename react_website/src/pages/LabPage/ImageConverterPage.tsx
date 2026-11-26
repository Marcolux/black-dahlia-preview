import { useEffect, useState } from "react"

import MandalaDahlia from "../../components/Mandala/MandalaDahlia"
import HomePageSeparator from "../../components/home-page-components/HomePageSeparator/HomePageSeparator"
import ButtonScribble from "../../components/ButtonScribble/ButtonScribble"
import DahliaLogo from "../../components/DahliaLogo/DahliaLogo"
import DahliaLoader from "./DahliaLoader"

import "../page.scss"
import "./lab-page.scss"

// https://image-converter-api-vmmj.onrender.com/convert

const ImageConverterPage = () => {
    type Status = 'empty' | 'idle' | 'converting' | 'done' | 'error'
    type DesiredFormat = 'webp' | 'avif' | 'jpeg' | 'png'

    const [status, setStatus] = useState<Status>('empty')
    
    const [fileImp, setFileImp] = useState<File | null>(null) 
    const [fileImpName, setFileImpName] = useState<string>('') 
    const [fileImpType, setFileImpType] = useState<string>('') 
    const [fileImpSize, setFileImpSize] = useState<string>('') 
    
    const [resultUrl, setResultURL] = useState<string>('') 
    const [resultImageName, setResultImageName] = useState<string>('') 
    const [resultImageSize, setResultImageSize] = useState<string>('') 
    const [resultImageType, setResultImageType] = useState<string>('') 
    const [resultUrlFileImp, setResultURLFileImp] = useState<string>('') 

    const [showPreviewError, setShowPreviewError] = useState<boolean>(false) 
    const [showPreviewLoad, setShowPreviewLoad] = useState<boolean>(false) 
    
    const [desiredFormat, setDesiredFormat] = useState<DesiredFormat>('webp') 
    const [desiredWidth, setDesiredWidth] = useState<string>("1000")
    const [desiredMaxKB, setDesiredMaxKB] = useState<string>("400")
    const [desiredStartQuality, setDesiredStartQuality] = useState<string>("100")
    const [desiredMinQuality, setDesiredMinQuality] = useState<string>("60")

    const [maxWidthPreview, setMaxWidthPreview] = useState<string>("100%")

    const handleConversion = async () => {
        setStatus('empty')

        if (!fileImp) { return null }
        
        setStatus('idle')
        const formData = new FormData()
        formData.append('file', fileImp)
        formData.append('format', desiredFormat)
        formData.append('width', desiredWidth)
        formData.append('maxKB', desiredMaxKB)
        
        setStatus('converting')
        const res = await fetch("https://image-converter-api-vmmj.onrender.com/convert", { method: 'POST', body: formData })
        const resultType =  res.headers.get('Content-Type')?.split('/')[1] as string
        const imageBlob = await res.blob()
        if(!imageBlob) { 
            setStatus('error')
            return null
        }
        
        const imageBlobURL = URL.createObjectURL(imageBlob)
        if (imageBlobURL) { setStatus('done') }
        
        const sizeKB = imageBlob.size / 1024
        setResultImageSize(sizeKB < 1024 ? `${sizeKB.toFixed(1)} KB` : `${(sizeKB / 1024).toFixed(2)} MB`)
        
        setResultURL(imageBlobURL)
        setResultImageType(resultType)
        setResultImageName(fileImpName)
        setMaxWidthPreview(desiredWidth)  
    }

    useEffect(() => {
        setShowPreviewError(false)
        setShowPreviewLoad(false)
        
        if (!fileImp) {
            setResultURLFileImp('')
            return
        }
        const url = URL.createObjectURL(fileImp)

        setResultURLFileImp(url)    
        setResultImageSize("")
        setResultURL("")
        setResultImageType("")
        
        // Runs when fileImp changes again or the page unmounts: frees the old preview's memory
        return () => { URL.revokeObjectURL(url) }
    }, [fileImp])

    return(
        <main className="page p-0" id="ImageConverterPage">
            <section className="flex flex-column flex-justifyContent-spaceAround flex-alignItems-center col-12" id="introPortfolio">
                <MandalaDahlia/>
                <HomePageSeparator/>
                <div className="flex flex-column py-20 col-12 flex-alignItems-center">
                    <h1 className="page_sub-headers text-center">Image Converter</h1>
                </div>
                <HomePageSeparator/>
            </section>
            <section className="col-12 flex flex-column col-12 flex-alignItems-center">

                <div id="converter" className="col-12 flex flex-column-md-down flex-alignItems-center" style={{columnGap: "20px"}}>

                    <div id="converter__preview" className="col-5 flex flex-column flex-alignItems-center p-30">

                        <div className="flex flex-column flex-alignItems-left col-12">
                            <h1 className="mt-0">Original Image</h1>
                            <div className="flex flex-alignItems-center flex-justifyContent-start">
                                <label htmlFor="">Name</label>
                                <input type="text" className="ml-20 input_converter" disabled value={fileImpName}/>
                            </div>

                            <div className="flex flex-alignItems-center mt-10" style={{columnGap: "20px"}}>
                                <div className="flex flex-alignItems-center flex-justifyContent-start">
                                    <label htmlFor="">Format:</label>
                                    <input className="input_converter ml-20" type="text" disabled value={fileImpType.toUpperCase()} style={{maxWidth: '70px'}}/>
                                </div>
                                <div className="flex flex-alignItems-center flex-justifyContent-start ml-20">
                                    <label htmlFor="">Size:</label>
                                    <input className="input_converter ml-20" type="text" disabled value={fileImpSize} style={{maxWidth: '125px'}}/>
                                </div>
                            </div>
                        </div>

                        <div className="previeBox my-20">
                            {
                                resultUrlFileImp !=="" && (
                                    !showPreviewError ?
                                        <div className="imgPrevContainer" id="originalPreview">
                                            <img 
                                                src={resultUrlFileImp} 
                                                alt="" 
                                                onError={() => { setShowPreviewError(true)}}
                                                onLoad={() => { setShowPreviewLoad(true)}}
                                                
                                                className={`${!showPreviewLoad ? "hide": ''}`}
                                                style={{width:"100%", height: "100%", objectFit:'contain'}}
                                            />

                                            <DahliaLogo
                                                animation="palette"
                                                className={`${showPreviewLoad ? "hide": ''}`}
                                            />
                                        </div>    
                                    : <p>No Preview Available for this file</p>
                                )   
                            }
                        </div>

                        <input 
                            type="file" 
                            multiple
                            accept="image/*,.heic,.heif"
                            className="mb-20 actionBtn choose"
                            onChange={(e) => {
                                const file = e.target.files?.[0] ?? null
                                setFileImp(file)

                                if (file) {
                                    const dotIndex = file.name.lastIndexOf('.')
                                    const hasExtension = dotIndex > 0
                                    setFileImpName(hasExtension ? file.name.slice(0, dotIndex) : file.name)
                                    setFileImpType(hasExtension ? file.name.slice(dotIndex + 1) : '')

                                    const sizeKB = file.size / 1024
                                    setFileImpSize(sizeKB < 1024 ? `${sizeKB.toFixed(1)} KB` : `${(sizeKB / 1024).toFixed(2)} MB`)
                                } else {
                                    setFileImpName('')
                                    setFileImpType('')
                                    setFileImpSize('')
                                }
                                setStatus('empty')
                            }}  
 
                        />
                    </div>

                    <div id="converter__options" className="col-2 flex flex-column px-20 py-30" style={{rowGap: "10px"}}>
                        <h3 className="m-0">Desired Options:</h3>

                        <div className="flex flex-column" style={{gap:"5px"}}>
                            <label>Format</label>
                            <select className="optionsInputs" value={desiredFormat} 
                                onChange={(e) => {
                                    const value = e.target.value as DesiredFormat
                                    setDesiredFormat(value)}
                                }
                            >
                                <option value="webp">webp</option>
                                <option value="avif">avif</option>
                                <option value="jpeg">jpeg</option>
                                <option value="png">png</option>
                            </select>
                        </div>

                        <div className="flex flex-column" style={{gap:"5px"}}>
                            <label htmlFor="">Width (px)</label>
                            <input 
                                className="optionsInputs"
                                type="text" 
                                value={desiredWidth}
                                onChange={(e) => {
                                    const value = e.target.value
                                    setDesiredWidth(value)
                                }}
                            />
                        </div>

                        <div className="flex flex-column" style={{gap:"5px"}}>
                            <label htmlFor="">Max KB</label>
                            <input
                                className="optionsInputs" 
                                type="text" 
                                value={desiredMaxKB}
                                onChange={(e) => {
                                    const value = e.target.value
                                    setDesiredMaxKB(value)
                                }}
                            />
                        </div>
                        <div className="flex flex-column" style={{gap:"5px"}}>
                            <label htmlFor="">Start Quality</label>
                            <input 
                                className="optionsInputs"
                                type="number" 
                                value={desiredStartQuality}
                                onChange={(e) => {
                                    const value = e.target.value
                                    setDesiredStartQuality(value)
                                }}
                                max={100}
                                min={0}
                            />

                        </div>
                        <div className="flex flex-column" style={{gap:"5px"}}>
                            <label htmlFor="">Min Quality</label>
                            <input 
                                className="optionsInputs"
                                type="number" 
                                value={desiredMinQuality}
                                onChange={(e) => {
                                    const value = e.target.value
                                    setDesiredMinQuality(value)
                                }}
                                max={100}
                                min={0}
                            />
                        </div>
                        <button
                            className="actionBtn conversion col-12 mt-20"
                            onClick={() => { 
                                handleConversion()
                            }}
                        >
                            Convert
                        </button>
                    </div>

                    <div id="converter__results" className="col-5 flex flex-column flex-alignItems-center p-30">
                        
                        <div className="flex flex-column flex-alignItems-left col-12">
                            <h1 className="mt-0">Converted Image</h1>

                            <div className="flex flex-alignItems-center flex-justifyContent-start">
                                <label htmlFor="">Name</label>
                                <input type="text" className="ml-20 input_converter" value={resultImageName} onChange={(e) => {setResultImageName(e.target.value)}}/>
                            </div>

                            <div className="flex flex-alignItems-center mt-10" style={{columnGap: "20px"}}>
                                <div className="flex flex-alignItems-center flex-justifyContent-start">
                                    <label htmlFor="">Format:</label>
                                    <input className="input_converter ml-20" type="text" disabled value={resultImageType.toUpperCase()} style={{maxWidth: '70px'}}/>
                                </div>
                                <div className="flex flex-alignItems-center flex-justifyContent-start ml-20">
                                    <label htmlFor="">Size:</label>
                                    <input className="input_converter ml-20" type="text" disabled value={resultImageSize} style={{maxWidth: '125px'}}/>
                                </div>
                            </div>
                        </div>

                        <div className="previeBox my-20">
                            {
                                (status !== 'empty') &&
                                (
                                    <div className="imgPrevContainer" id="resultPreview">
                                        {status === 'done'
                                            ?
                                            <img src={resultUrl} alt=""  style={{width:"100%", height: "100%", maxWidth: `${maxWidthPreview}px`, objectFit:'contain'}}/>
                                            :
                                            <DahliaLoader/>
                                        }
                                    </div>
                                )
                            }
                        </div>

                        <a
                            href={resultUrl} 
                            download={`${resultImageName}.${resultImageType}`}
                            className="mb-20 actionBtn download"
                        >
                            Download
                        </a>
                    </div>

                </div>
            </section>
            <ButtonScribble
                className="primaryBtn-vr1 mt-0-lg mt-10 ml-20-md" 
                to={'/lab'} 
                scribbleShift="50px"
                buttonBg="var(--black-dahlia-white)"
                backColor="var(--alternative-black)"
                lineColor="var(--alternative-black)"
            >
                Back to Lab
            </ButtonScribble>
        </main>
    )
}

export default ImageConverterPage