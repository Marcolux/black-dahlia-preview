import "../page.scss"
import "./preview-page.scss"

import { ReactComponent as Dahlia } from "./mandala_dahlia_half.svg"
import { ReactComponent as Dahlia1 } from "./mandala_dahlia_half_black.svg"
import { ReactComponent as Dahlia2 } from "./mandala_dahlia_color.svg"
import { ReactComponent as Dahlia3 } from "./mandala_dahlia_cross.svg"
import { ReactComponent as Dahlia4 } from "./mandala_dahlia_cross_single_color.svg"
import Mandala from "../../components/Mandala/Mandala"
import MandalaDahlia from "../../components/Mandala/MandalaDahlia"

const PreviewPage = () => {

    return(
        <main className="page" id="PreviewPage">
            <div id="previewImg">
                <Dahlia/>
            </div>
            <div id="previewImg2">
                <Dahlia1/>
            </div>
            <div id="previewImg3" className="flex">
                <Dahlia2/>
                <Mandala/>
            </div>
            <div id="previewImg4" className="flex">
                <Dahlia3/>
                <Mandala/>
            </div>
            <div id="previewImg5" className="flex">
                <Dahlia4/>
                <Mandala/>
            </div>
            <div id="previewImg6" className="flex">
                <div className="flex flex-column text-center">
                    <p>Old Mandala</p>
                    <Mandala/>
                </div>
                <div className="flex flex-column text-center">
                    <p>New Mandala preview</p>
                    <MandalaDahlia size={600} animation="pulse" petals={[ { fill: 'rgb(233 30 98 / 0.2)' }, { fill: 'rgb(233 30 98 / 0.2)' }, { fill: 'rgb(233 30 98 / 0.2)' }, { fill: 'rgb(233 30 98 / 0.2)' },{ fill: 'rgb(233 30 98 / 0.2)' },{ fill: 'rgb(233 30 98 / 0.2)' },{ fill: 'rgb(233 30 98 / 0.2)' },{ fill: 'rgb(233 30 98 / 0.2)' },{ fill: 'rgb(233 30 98 / 0.2)' },{ fill: 'rgb(233 30 98 / 0.2)' },{ fill: 'rgb(233 30 98 / 0.2)' },{ fill: 'rgb(233 30 98 / 0.2)' },{ fill: 'rgb(233 30 98 / 0.2)' },{ fill: 'rgb(233 30 98 / 0.2)' },{ fill: 'rgb(233 30 98 / 0.2)' },{ fill: 'rgb(233 30 98 / 0.2)' },]} />
                </div>
            </div>
        </main>
    )
}

export default PreviewPage