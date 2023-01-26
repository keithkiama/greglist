import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Listingdata(){
    let params = useParams(); 
    const [myData, setMyData] = useState({})
    console.log(params.listingId)
    // console.log("Here")

    useEffect(()=>{
        fetch(`http://localhost:3000/listings/${params.listingId}`).then((res)=>res.json()).then((data)=>setMyData(data))
    },[params.listingId])


    return(
        <>
        <h1>{myData.description}</h1>
        <h1>{myData.location}</h1>
        </>
    )
}

export default Listingdata;