import one from '../assets/p01.jpg';
import five from '../assets/p07.jpg';
import six from '../assets/p06.jpg'

function Feedback(){
    return(
        <div className="feedback">
                    <h1>Coustomer's Feedback</h1>
                    <div className='feedback-header'>
                        <img src={one} alt='person'/>
                        <h3>Jenny Wilson</h3>
                    </div>
                    <div className='review'>
                        <p><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                            <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                            <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                            <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                            <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i></p>
                            <p>The food was excellent and so was the service. I had the mushroom risetty with acailoges which was awesome. I had a borger over grans tgluten-freel which was alan very good. Thay were very conscientious about gluten allergies</p>
                    </div>  
                    <div className='feedback-header'>
                        <img src={five} alt='person'/>
                        <h3>James Jeol</h3>
                    </div>
                    <div className='review'>
                        <p><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                            <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                            <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                            <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>

                            <i class="fa-solid fa-star" ></i></p>
                            <p>We enjoyed the Egos Benedict served on homemade focaccla bread and het coffee. Perfect service</p>
                    </div> 
                    <div className='feedback-header'>
                        <img src={six} alt='person'/>
                        <h3>Luna</h3>
                    </div>
                    <div className='review'>
                        <p><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                            <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                            <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                            <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                            <i class="fa-solid fa-star" ></i></p>
                            <p>The food was excellent and so was the service. I had the mushroom risetty with acailoges which was awesome. I had a borger over grans tgluten-freel which was alan very good. Thay were very conscientious about gluten allergies</p>
                    </div>                    
                </div>
    )
}

export default Feedback