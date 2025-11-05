import "../page.scss" 
import "./homepage.scss"
import TimeLineStory from "../../components/TimelineStory/TimelineStory"

const HomePage = () => {

    return(
        <div className="page" id="HomePage">
            <h1>HOME PAGE</h1>
                BLACK DAHLIA PREVIEW SITE
            <h4>Time Line Story</h4>
            <TimeLineStory className="my-20"/>
        </div>
    )
}

export default HomePage