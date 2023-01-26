import React from "react";
import { Link } from "react-router-dom";

function Eachlisting({description, image, location, id}){
    return(
        <div style={{width: "20%"}}>
            <img src={image}></img>

            <h1>{description}</h1>
            <p>{location}</p>
            {/* <button>View Details</button> */}
            <Link to={`detail/${id}`}>View Details</Link>
        </div>
    )
}

export default Eachlisting