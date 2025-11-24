import "../page.scss"
import"./membership-page.scss"

const MembershipPage = () => {

    return(
        <div className="page" id="MembershipPage">
            
            <div className="col-12 flex flex-column flex-alignItems-center">
                <h1 className="page_sub-headers-vr">COMING</h1>
                <img id="spiningDahliaMemberPg" src={`${process.env.PUBLIC_URL}/images/about-page/dahlia_icon_biege 6.png`} alt="" />
                <h1 className="page_sub-headers-vr">SOON!</h1>
            </div>
        </div>
    )
}

export default MembershipPage