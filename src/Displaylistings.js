import React,{useState, useEffect} from "react";
import Eachlisting from "./Eachlisting";
import Listingform from "./Listingform";


//see all listings => fetch data from api, then store the data in a state variable. After that, find a way to render the state data to components.
// add a listing from form 

function Displaylistings() {
    const [listings, setListings] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/listings")
            .then((resp) => resp.json())
            .then((data) => setListings(() => data))
    }, [])


    const listloop = listings.map((elem)=>{
        return(
            // <Eachlisting description={elem.description} location={elem.location}/>
            <Eachlisting key={elem.id} id={elem.id} description={elem.description} image={elem.image} location={elem.location} />
        )
    })

    function handleAddListing(params){
        console.log(params)
        setListings([...listings, params])
    }

    console.log(listings)
    return (
        <>
        {listloop}
        <Listingform onAdd={handleAddListing}/>
        </>
    )
}

export default Displaylistings;