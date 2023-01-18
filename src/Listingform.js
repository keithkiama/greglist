import React, { useState } from "react";


// add events & event handlers, to capture user inputs
// structure the user input/data to a desired data type(object)
// add submit action and prevent Default()/refresh
// send the data from the form to our display list

// go back to parent, give the child a prop, that is assigned to a function.
// in that function, make sure it accepts arguments.
// in the child, accept and destructure the prop, the prop can now be invoked with the data



function Listingform({onAdd}) {
    const[userData, setUserData] = useState({})


    function handleInput(e){
        console.log(e.target.value)
        console.log(e.target.name)
        setUserData({...userData, [e.target.name]:e.target.value})
    }

    // console.log(userData)

    function handleSubmit(e){
        e.preventDefault()
        // post received data
        fetch("http://localhost:3000/listings",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }).then((res)=>res.json())
        .then((dataInJson)=>{
            onAdd(dataInJson)
        })
    }

    return (
        <>
        <h1 style={{margin: 10}}>Add Listing form</h1>        
        <form onSubmit={handleSubmit}>
            <label>
                Description:
                <input onChange={handleInput}  type="text" name="description" />
            </label>
            <label>
                Location:
                <input onChange={handleInput} type="text" name="location" />
            </label>
            <label>
                Image:
                <input onChange={handleInput} type="text" name="image" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </>
    )

}

export default Listingform