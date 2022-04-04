import React from 'react';
import image from './fruits1.png'

const Home = () => {
    return (
        <div  className="flex  gap-10 justify-around  py-8" >
            <div  > <h1 className='text-4xl font-bold'   >Welcome To <br></br> <span className='text-blue-600'>Fruit Corner</span></h1>  <p className='text-xl font-semibold py-5' > We ensure the best products. <br></br>Try our products and get the best experience. <br></br>We provide fresh and high quality products. </p>  <button className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700'>Show Products</button>   </div>
  
<div> <img  className='w-25'  src={image} alt="fruits"></img>  </div>

            
        </div>
    );
};

export default Home;