import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { authUser } from "../actions/authedUser";
import { useHistory, useLocation } from 'react-router-dom'

function Login({ userIds, dispatch, users }) {

    let history = useHistory();
    let location = useLocation();
    const defaultUser = userIds[1]
    const [user, setUser] = useState('tylermcginnis');
    console.log('user',user,defaultUser)
//location.state ||
    let { from } =  location.state ||{ from: { pathname: "/" } };
    let login = (e) => {
        if (userIds.includes(user)) {
            dispatch(authUser(user))
            // console.log(from, "doesn't exist")
            history.replace(from);
        }
        else {
            console.log(user, "doesn't exist")
        }
    };

    return <div>
        <ul>
            {userIds.map(id => <li key={id}>{id}</li>)}
        </ul>

        <select value={user} onChange={(e) => (setUser(e.target.value))}>
            {userIds.map(id =><option value={id} key={id}>{users[id].name}</option>)}
        </select>
        <button onClick={login}>Login In</button>
    </div>

}


function mapStateToProps({ users }, props) {
    const userIds = Object.keys(users)

    return {
        userIds, users,
        props

    }
}

export default connect(mapStateToProps)(Login)