import React from 'react';
import CustomerReview from '../../Hooks/CustomerReview';
import Review from '../Review/Review';
import image from './fruits1.png'

const Home = () => {

    const [reviews]=CustomerReview()
    return (
        <>
        <div  className="flex  gap-10 justify-around  py-8" >
            <div  > <h1 className='text-4xl font-bold'   >Welcome To <br></br> <span className='text-blue-600'>Fruit Corner</span></h1>  <p className='text-xl font-semibold py-5' > We ensure the best products. <br></br>Try our products and get the best experience. <br></br>We provide fresh and high quality products. </p>  <button className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700'>Show Products</button>   </div>
  
<div> <img  className='w-25'  src={image} alt="fruits"></img>  </div>

            
        </div>
        <div>  <h1  className='text-4xl text-blue-500  text-center  my-4'>  Customer Reviews(3)</h1>  
        
        <div  className="grid grid-cols-3 gap-2">  {
            reviews.slice(0,3).map(review =>  <Review key={review.id} review={review}></Review> )}   </div>
         </div>
        </>
    );
};

export default Home;