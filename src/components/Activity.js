import BarChart from "./BarChart"

function Activity(){
    return(
        <div class="content-two">
                <div class="barchart" style={{height:"55vh"}}>
                    <div className="barchart-heading">
                        <h1>Activity</h1>
                        <select style={{backgroundColor:"#4B4C51", border:"2px solid #4B4C51", color:"#ccc", borderRadius:"5px"}}>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                    <BarChart/>
                </div>
                <div class="dropdown">
                    <div class="goals">
                       <i class="fa-solid fa-arrows-to-dot" style={{color: "#e20808"}}></i>
                        <p>Goals</p>
                        <i id="arrow" class="fa-solid fa-angle-right" style={{color: "#7b828f"}}></i>
                    </div>
                    <div class="Dish">
                        <i class="fa-solid fa-burger" style={{color: "#42559F"}}></i>
                         <p>Popular Dishes</p>
                         <i id="arrow-dish" class="fa-solid fa-angle-right" style={{color: "#7b828f"}}></i>
                     </div>
                     <div class="menus">
                        <i class="fa-solid fa-utensils" style={{color: "#217BA4"}}></i>
                        <p>Menus</p>
                        <i id="arrow-menu" class="fa-solid fa-angle-right" style={{color: "#7b828f"}}></i>
                     </div>
                </div>
            </div>
    )
}

export default Activity