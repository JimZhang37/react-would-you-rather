import React, {Component} from 'react'
import UserList from './UserList'
import {users,questions as Qs } from '../utils/_DATA'
class A extends Component {


    
    render(){
        const uIds = Object.keys(users)
        const {id, name, avatarURL, answers, questions} = users[uIds[0]]
        const user = {
            
            name,
            rank: 1,
            avatarURL,
            numAnswered: 3,
            numCreated: questions.length,
        }
        return (
            <div>
                <UserList />

            </div>
        )
    }
}

export default A