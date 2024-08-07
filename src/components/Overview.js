import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

function Overview(){
    return(
        <div class="content-one">
                <div class="total">
                    <div class="total-orders">
                        <i class="fa-solid fa-cart-shopping" style={{color:  "#005dff", backgroundColor: "#283268"}}></i>
                        <p>Total Orders</p>
                        <div>
                            <h1 style={{fontSize:"30px"}}>75</h1>
                            <p style={{color:"#0bc90b"}}><BiSolidUpArrow style={{color:"green"}}/> 3%</p>
                        </div>
                    </div>
                    <div class="total-delivered">
                        <i class="fa-solid fa-bag-shopping" style={{color: "#0bc90b", backgroundColor: "#155145"}}></i>
                        <p>Total Delivered</p>
                        <div>
                            <h1 style={{fontSize:"30px"}}>70</h1>
                            <p style={{color: "red"}}><BiSolidDownArrow style={{color:"red"}}/>3%</p>
                        </div>
                    </div>
                    <div class="total-cancelled">
                        <i class="fa-solid fa-bag-shopping" style={{color:"#F15D5D",backgroundColor: "#5F3237"}}></i>
                        <p>Total Cancelled</p>
                        <div>
                            <h1 style={{fontSize:"30px"}}>05</h1>
                            <p style={{color: "#0bc90b"}}><BiSolidUpArrow style={{color:"green"}}/> 3%</p>
                        </div>
                    </div>
                    <div class="total-revenue">
                        <i class="fa-brands fa-bitcoin" style={{color:"#DD4CA0", backgroundColor: "#5B2A4A"}}></i>
                        <p>Total Revenue</p>
                        <div>
                            <h1 style={{fontSize:"25px"}}>$12K</h1>
                            <p style={{color: "red"}}><BiSolidDownArrow style={{color:"red"}}/>3%</p>
                        </div>
                    </div>
                </div>
                <div class="net-profit">
                    <p>Net Profit</p>
                    <div class="net-profit_1">
                        <div>
                            <h1 style={{fontSize:"25px"}}>$6759.25</h1>
                            <p style={{color: "green",fontSize:"15px"}}><BiSolidUpArrow style={{color:"green", fontSize:"15px"}}/> 3%</p>
                        </div>
                        <div >
                            <div className="inside">
                            <h1 style={{fontSize:"20px", color:"white"}}>70%</h1>
                            <p style={{fontSize:"8px"}}>Goal <br/>Completed</p>
                            </div>
                            <div class="progress-bar">
  <progress value="75" min="0" max="100" style={{visibility:"hidden",height:"0",width:"0"}}>75%</progress>
</div>
<p style={{fontSize:"8px"}}>The Values here are have been rounded off</p>

                        </div>
                    </div>
                </div>
                </div>
    )
}

export default Overview