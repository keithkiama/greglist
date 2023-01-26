import React,{useState, useEffect} from "react";
import Eachlisting from "./Eachlisting";
import Listingform from "./Listingform";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Listingdata from "./Listingdata";
import { queryByRole } from "@testing-library/react";
import Ournavabar from "./Ournavabar";
import { Alert } from "react-bootstrap";


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
         <Ournavabar/>
         <Alert variant="info">
         Heyy, Welcome to GregList
        </Alert>
        <Routes>
            <Route path="" element={<h1>Karibu Nyumbani</h1>}/>
            <Route path="/addlisting" element={<Listingform onAdd={handleAddListing}/>}/>
            <Route path="showlistings" element={<>
               
                <h1> Available Listings </h1>        
                <div style={{display: "flex"}}>
                {listloop}
                </div>
                <Outlet/>              
            </>
        }>
                <Route path="new" element={<><h1>House devs of Kinoo</h1></>}/>
                <Route path="ghai" element={<><h1>I am a totally random element</h1></>}/>
                <Route path="mazee" element={<><h1>Wueeehh, Mazeee</h1></>}/>
                <Route path="detail/:listingId" element={<Listingdata/>}/> 
            </Route>
            <Route path="contact" element={<><h1>You can contact me</h1></>}/>
        </Routes>

        
        
        
        </>
    )
}

export default Displaylistings;