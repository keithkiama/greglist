import React from "react";

function Eachlisting({description, image, location, id}){
    return(
        <div>
            <img src={image}></img>
            <h1>{description}</h1>
            <p>{location}</p>
        </div>
    )
}

export default Eachlisting