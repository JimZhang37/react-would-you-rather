import React, {  Component } from "react";
import { connect } from "react-redux";
import { handleAuthUser } from "../actions/authedUser";
import {withRouter } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            from: props.location.state.from || { pathname: "/" } 
        }
    }

    login(e) {
        this.props.dispatch(handleAuthUser(this.state.user))
    };

    handleChange(e) {
        this.setState({ user: e.target.value })
    }
    render() {
        const {history,  usersArray, authedUser} = this.props
        if (authedUser !== null) {
            history.replace(this.state.from)
        }
        return (
            <div>
                <select value={this.state.user} onChange={(e) => (this.handleChange(e))}>
                    <option value="" disabled>Select your option</option>
                    {usersArray.map(user => <option value={user.id} key={user.id}>{user.name}</option>)}
                </select>
                <button onClick={(e) => this.login(e)}>Login In</button>
            </div>)
    }
}

// function Login({ usersArray, authedUser, dispatch }) {
    // let history = useHistory();
    // let location = useLocation();
    // const [user, setUser] = useState('');
    // let { from } = location.state || { from: { pathname: "/" } };



//     if (authedUser !== null) {
//         history.replace(from)
//     }
//     return (
//         <div>
//             <select value={user} onChange={(e) => (handleChange(e))}>
//                 <option value="" disabled>Select your option</option>
//                 {usersArray.map(user => <option value={user.id} key={user.id}>{user.name}</option>)}
//             </select>
//             <button onClick={(e) => login(e)}>Login In</button>
//         </div>)

// }


function mapStateToProps({ users, authedUser }) {
    const usersArray = Object.values(users)

    return {
        usersArray,
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Login))