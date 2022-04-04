import React from 'react';
import CustomerReview from '../../Hooks/CustomerReview';
import Review from '../Review/Review';

const Reviews = () => {

    const[reviews,setReview]=CustomerReview()
    return (
        <div >
             <h1 className="text-4xl text-center text-blue-500"> Our Customer Feedback</h1>
<div className="py-4 my-4 grid grid-cols-2 gap-2  ">   { reviews.map((review=> <Review key={review.id} review={review}></Review>   ))}  </div>
          
        </div>
    );
};

export default Reviews;