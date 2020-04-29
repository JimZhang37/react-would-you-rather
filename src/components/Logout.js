import React from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import { authUser } from '../actions/authedUser'
function Logout({authedUser, dispatch}){
    let history = useHistory()

    return authedUser? (
        <p>
        Welcome {authedUser} !
        <button onClick={() => {
            dispatch(authUser(null))
            history.push("/")
        }}>
        Sign Out
        </button>
        
        </p>
    )
    :
    (<p>You are not logged in!</p>)



}

function mapStateToProps({ authedUser }) {

    return {
        authedUser
    }
}
export default connect(mapStateToProps)(Logout)