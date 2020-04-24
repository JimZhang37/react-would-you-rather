import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser } from "../actions/authedUser";


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: ''
        }
        this.handleSelect = this.handleSelect.bind(this)
    }

    onsubmit() {
        const { dispatch, userIds } = this.props
        if (userIds.includes(this.state.user)) {
   
            dispatch(authUser(this.state.user))
        }
        else {
            console.log(this.state.user, "doesn't exist")
        }

    }
    handleSelect(e) {
        // console.log(e.target.value)
        const value = e.target.value
        this.setState((state, props) => {
            return {user:value};
          });
    }
    render() {
        const { userIds, users } = this.props

        return <div>
            <ul>
                {userIds.map(id => <li key={id}>{id}</li>)}
            </ul>

            <select value={this.state.user} onChange={(e)=> this.handleSelect(e)}>
                {userIds.map(id =>
                    <option value={id} key={id}>{users[id].name}</option>
                )}
            </select>
            <button onClick={(e) => this.onsubmit()}>Login In</button>
        </div>

    }
}
function mapStateToProps({ users }) {
    const userIds = Object.keys(users)

    return {
        userIds, users

    }
}

export default connect(mapStateToProps)(Login)