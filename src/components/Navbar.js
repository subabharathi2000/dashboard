

function Navbar(){
    return(
        <div class="navbar">
        <div class="main-icon">
            <i class="fa-solid fa-fan" style={{color: "#255ec1"}}></i>
        </div>
        <div class="search">
            <i class="fa-solid fa-magnifying-glass" style={{color: "beige"}}></i>
            <input type="text" placeholder="Search"/>
        </div>
        <div class="menu">
            <i class="fa-regular fa-envelope" style={{color: "#7b828f"}}></i>
            <i class="fa-solid fa-gear" style={{color:  "#7b828f"}}></i>
            <i class="fa-regular fa-bell" style={{color: "#7b828f"}}></i>
            <i class="fa-solid fa-user" style={{color: "#7b828f"}}></i>
        </div>
    </div>
    )
}

export default Navbar