import React from 'react'
import tshirtphoto from '../image/tshirtphoto.jpeg'
function Home(props) {
    return (
        <div>
           
            {/* <h1>Home Component</h1> */}
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={tshirtphoto} alt='tshirtphoto' />
                </div>
                <div className="text-wrapper item">
                    <span>
                        T-shirt
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home