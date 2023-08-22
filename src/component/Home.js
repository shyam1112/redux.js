
import React from 'react'
import tshirtphoto from '../image/tshirtphoto.jpeg'
function Home() {
    return (<div>
        <h1>
            Home component
        </h1>
        <div className='item'>
            <img src={tshirtphoto} alt='T-shirt' className='image' />

            <div className='price'>
                <h3>T-shirt price :$400</h3>
            </div>
            
            <div className='btn'>
                <button >Add to cart</button>
            </div>
        </div>

    </div>)
}
export default Home;