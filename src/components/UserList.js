import React, { Component } from 'react'
import User from './User'
import { users, questions as Qs } from '../utils/_DATA'
class UserList extends Component {



    render() {
        const uIds = Object.keys(users)
        let usersFormated = uIds.map(id => ({
            name: users[id].name,
            avatarURL: users[id].avatarURL,
            numAnswered: Object.keys(users[id].answers).length,
            numCreated: users[id].questions.length,
            
        })).sort((a, b) => b.numAnswered +b.numCreated - a.numAnswered -a.numCreated)

        for(let i= 0; i < usersFormated.length; i++){
            usersFormated[i].rank = i+1
        }

        return (
            <div>
                <h3 className='center'>Leader Board</h3>
                <ul className='dashboard-list'>
                    {usersFormated.map((id) => (
                        <li key={id}>
                            <User user={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default UserList