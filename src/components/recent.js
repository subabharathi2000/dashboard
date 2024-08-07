import Orders from "./ordermap"

function RecentOrder(){
    return(
        <div className="order-container">
            <div className="order-heading">
                <h1>Recent Orders</h1>
            </div>
            <Orders/>
        </div>
    )
}

export default RecentOrder