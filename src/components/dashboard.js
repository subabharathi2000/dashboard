import Overview from "./Overview"
import Activity from "./Activity"
import FeedbackOrder from "./Feedbackorder"

function Dashboard(){
    return(
        
        <div class="container">
        <div class="side-nav">
            <div class="side-menus">
                <div class="side-icons"><i class="fa-solid fa-house" style={{color: "#7b828f"}}></i></div>
                <div class="side-icons"><i class="fa-solid fa-chart-column" style={{color: "#7b828f"}}></i></div>
                <div class="side-icons"><i class="fa-solid fa-clipboard-list" style={{color: "#7b828f"}}></i></div>
                <div class="side-icons"><i class="fa-solid fa-wallet" style={{color: "#7b828f"}}></i></div>
                <div class="side-icons"><i class="fa-solid fa-bag-shopping" style={{color: "#7b828f"}}></i></div>
            </div>
            <div class="logout">
                <i class="fa-solid fa-right-from-bracket" style={{color: "#7b828f;"}}></i>
            </div>
        </div>
        <div class="dashboard">
        <div class="dashboard-heading">
            <h1>Dashboard</h1>
        </div>
        <div class="content">
            <Overview/>
            <Activity/>
            <FeedbackOrder/>
        </div>
    </div>
</div>
    )
}

export default Dashboard
