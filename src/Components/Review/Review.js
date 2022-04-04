import React from 'react';

const Review = (props) => {

    const{ name,img,ratings,review } = props.review
    return (
        <div  className="flex gap-2 items-center border border-solid border-blue-400 rounded-md">

<div  className="px-4" > <img src={img} alt=""></img> </div>
<div>  <h1  className="text-2xl font-semibold">{name}</h1>
            <p className="text-xl p-2" >{review}</p>
            <h1  className=" font-bold"> Rating:{ratings}</h1>  </div>
           
        </div>
    );
};

export default Review;