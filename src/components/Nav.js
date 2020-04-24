import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser } from '../actions/authedUser'

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
            <div>
                {authedUser}
            </div>
            {authedUser?
            <div>
                <button onClick={(e) => this.handleSubmit()}>log out</button>
            </div>
            :''}
        </div>)
    }
}

function mapStateToProps({ authedUser }) {

    return {
        authedUser

    }
}
export default connect(mapStateToProps)(Nav)