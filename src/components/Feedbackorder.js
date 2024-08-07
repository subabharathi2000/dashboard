import RecentOrder from "./recent"
import Feedback from "./feedback"

function FeedbackOrder(){
    return(
        <div class="content-three">
                <div class="recent-comments">
                    <RecentOrder/>
                </div>
                    <Feedback/>
     </div>
    )
}

export default FeedbackOrder