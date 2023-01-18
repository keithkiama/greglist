import React,{useState, useEffect} from "react";
import Eachlisting from "./Eachlisting";
import Listingform from "./Listingform";
import { Link, Route, Routes } from "react-router-dom";

//<Routes> <Route 1> <Route2> <></Routes>


//see all listings => fetch data from api, then store the data in a state variable. After that, find a way to render the state data to components.
// add a listing from form => 

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

    // console.log(listings)
    return (
        <>
        <Routes>
            <Route path="" element={<h1>Karibu Nyumbani</h1>}/>
            <Route path="addlisting" element={<Listingform onAdd={handleAddListing}/>}/>
            <Route path="showlistings" element={<>
                <h1> Available Listings </h1>        
                <div style={{display: "flex"}}>
                {listloop}
                </div>
            </>}/>
        </Routes>
        <Link to={'/addlisting'}>Take Me to Form</Link>
        <Link to={'/showlistings'}>Shows Listings</Link>
        <Link to={'/'}> Go Home </Link>
        
        
        
        </>
    )
}

export default Displaylistings;