import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAuthUser } from "../actions/authedUser";
import { useHistory, useLocation } from 'react-router-dom'

function Login({ usersArray, authedUser, dispatch }) {
    let history = useHistory();
    let location = useLocation();
    const [user, setUser] = useState('');
    let { from } = location.state || { from: { pathname: "/" } };
    
    function login(e) {
        dispatch(handleAuthUser(user))
        history.replace(from);
    };

    if (authedUser !== null) {
        history.replace(from)
    }
    return (
        <div>
            <select value={user} onChange={(e) => (setUser(e.target.value))}>
                <option value="" disabled>Select your option</option>
                {usersArray.map(user => <option value={user.id} key={user.id}>{user.name}</option>)}
            </select>
            <button onClick={(e)=>login(e)}>Login In</button>
        </div>)

}


function mapStateToProps({ users, authedUser }) {
    const usersArray = Object.values(users)

    return {
        usersArray,
        authedUser
    }
}

export default connect(mapStateToProps)(Login)