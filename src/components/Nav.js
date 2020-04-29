import React from "react";
import { Link } from 'react-router-dom'
import Logout from "./Logout";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
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

            {/*  
            <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>*/}

}



export default Navigation