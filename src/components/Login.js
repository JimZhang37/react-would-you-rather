import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAuthUser } from "../actions/authedUser";
import { Redirect, useLocation} from 'react-router-dom'

function Login() {
    const location = useLocation();
    const dispatch = useDispatch();
    const authedUser = useSelector((state) => state.authedUser);
    const usersArray = useSelector((state) => Object.values(state.users));
    const [user, setUser] = useState('')
    const [from, setFrom] = useState(location.state.from || { pathname: "/" })

    const login = (e) => {
        dispatch(handleAuthUser(user))
    };

    const handleChange = (e) => {
        setUser(e.target.value)
    }
    if (authedUser !== null) {
        return (<Redirect to={from} />)
    }
    return (
        <div>
            <select value={user} onChange={(e) =>{e.preventDefault();handleChange(e)}}>
                <option value="" disabled>Select your option</option>
                {usersArray.map(user => <option value={user.id} key={user.id}>{user.name}</option>)}
            </select>
            <button onClick={(e)=>{e.preventDefault();login()}}>Login In</button>
        </div>
    )
}

export default Login
