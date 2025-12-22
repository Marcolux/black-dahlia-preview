import "../page.scss"
import"./membership-page.scss"
import { ReactComponent as Dahlia } from "./mandala_dahlia.svg";

const MembershipPage = () => {

    return(
        <div className="page" id="MembershipPage">
            <div className="col-12 flex flex-column flex-alignItems-center" id="MembershipPageWrapper">
                <h1 className="page_sub-headers-vr pb-20">COMING</h1>
                    <Dahlia
                        className="aboutDahlia" 
                    />
                <h1 className="page_sub-headers-vr pt-20">SOON!</h1>
            </div>
        </div>
    )
}

export default MembershipPage