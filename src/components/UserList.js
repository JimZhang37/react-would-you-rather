import React from 'react'
import User from './User'
import { connect } from 'react-redux'


function UserList({ users }) {
    let usersFormated = Object.values(users)
    usersFormated
        .map((user) => {
            const numAnswered = Object.keys(user.answers).length
            const numCreated = user.questions.length
            user.numAnswered = numAnswered
            user.numCreated = numCreated
            user.score = numAnswered + numCreated
            return user
        })

    usersFormated.sort((a, b) => b.score  - a.score )
       


    return (
        <div>
            <h3 className='center'>Leader Board</h3>
            <ul className='dashboard-list'>
                {usersFormated.map((user, index) => (
                    <li key={user.name}>
                        <User user={user} rank = {index+1} />
                    </li>
                ))}
            </ul>
        </div>
    )
}


function mapStateToProps({ users }) {
    return { users }
}

export default connect(mapStateToProps)(UserList)