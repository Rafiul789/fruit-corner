import { useEffect, useState } from "react"

const CustomerReview= () => {

const[reviews,setReview]=useState([]);

useEffect(() => {
    fetch('customer.json')
    .then(res=>res.json())
    .then(data=>setReview(data))
},[])
return [reviews,setReview];

}

export default CustomerReview;