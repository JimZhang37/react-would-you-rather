import React from "react";
import { Link } from 'react-router-dom'
import Logout from "./Logout";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'



function Navigation() {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Would You Rather...?</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="tabs" defaultActiveKey='/'>
                <Nav.Item>
                    <Nav.Link as={Link} to='/' eventKey='/'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to='/add' eventKey='/add' >Add</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to='/leaderboard' eventKey='leaderboard'>Leader Board</Nav.Link>
                </Nav.Item>
            
            </Nav>
            <Logout></Logout>
            </Navbar.Collapse>
        </Navbar>
    )



}



export default Navigation