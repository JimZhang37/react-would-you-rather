import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser } from '../actions/authedUser'
import {NavLink} from 'react-router-dom'
import Logout from "./Logout";
class Nav extends Component {

    handleSubmit() {
        const { dispatch } = this.props
        console.log("log out")
        dispatch(authUser(null))
    }
    render() {
        const { authedUser } = this.props
        return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/new'>New</NavLink>
            <NavLink to='/users'>Users</NavLink>

            <Logout></Logout>
        </div>)
    }
}

function mapStateToProps({ authedUser }) {

    return {
        authedUser

    }
}
export default connect(mapStateToProps)(Nav)