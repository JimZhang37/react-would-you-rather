import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authUser } from '../actions/authedUser'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
function Logout() {
    let history = useHistory();
    const dispatch = useDispatch();
    const authedUser = useSelector((state)=>state.authedUser)

    return (
        <Nav variant="tabs" defaultActiveKey='/login'>

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
                    <Nav.Link as={Link} to='/login' eventKey='/login'>Login</Nav.Link>
                </Nav.Item>)}
        </Nav>)

}

export default Logout;