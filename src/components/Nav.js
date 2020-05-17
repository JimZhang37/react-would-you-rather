import React from "react";
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authUser } from '../actions/authedUser'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Navigation() {
    let history = useHistory()
    const dispatch = useDispatch()
    const authedUser = useSelector((state) => state.authedUser)

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Would You Rather...?</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="tabs" >
                    <Nav.Item>
                        <Nav.Link as={NavLink} exact to='/' eventKey='/'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to='/add' eventKey='/add' >Add</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to='/leaderboard' eventKey='leaderboard'>Leader Board</Nav.Link>
                    </Nav.Item>
                    {authedUser ?
                        (<Nav.Item>
                            <span>Welcome {authedUser} !</span>

                            <button onClick={() => {
                                dispatch(authUser(null))
                                history.push("/")
                            }}>
                                Sign Out
                            </button>
                        </Nav.Item>
                        )
                        :
                        (<Nav.Item>
                            <Nav.Link as={NavLink} to='/login' eventKey='/login'>Login</Nav.Link>
                        </Nav.Item>)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;