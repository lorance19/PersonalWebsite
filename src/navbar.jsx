import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class NavBar extends Component {
    render() { 
        return ( 
            <Navbar bg="transparent" variant="light" className="justify-content-lg-center ">
                <Nav calssName="m-5">
                    <Nav.Link  href="#home">Home</Nav.Link>
                    <Nav.Link  href="#about">About</Nav.Link>
                    <Nav.Link  href="#contact">Contact</Nav.Link>
                    <Nav.Link  href="#resume">Resume</Nav.Link>

                </Nav>
            
            </Navbar>
         );
    }
}
 
export default NavBar;