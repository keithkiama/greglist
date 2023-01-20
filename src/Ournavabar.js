import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";



function Ournavabar(){
    return(
        <>
         {/* <Link to={'/addlisting'}>Take Me to Form</Link>
        <button> <a href="/listing">Home</a> </button>
        <Link to={'/showlistings'}>Shows Listings</Link>
        <Link to={'/'}> Go Home </Link>
        <Link to={'/contact'}>Show Contact</Link>
        <Link to={'/showlistings/mazee'}>Mazee</Link>
        <Link to={'/showlistings/ghai'}>Random</Link> */}


         <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">GregsList</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/showlistings">Show Listings</Nav.Link>
            <Nav.Link href="/addlisting">Add Listing</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default Ournavabar;