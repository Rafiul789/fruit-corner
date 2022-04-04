import React from 'react';
import CustomerReview from '../../Hooks/CustomerReview';

const Reviews = () => {

    const[reviews,setReview]=CustomerReview()
    return (
        <div>
            <h1>Hello This is review page :{reviews.length}  </h1>

            { reviews.map((review=> <h1>{review.id}</h1> ))}
        </div>
    );
};

export default Reviews;