import React from 'react'

function User(props){
    const {name, avatarURL, numAnswered, numCreated, } = props.user
    const rank = props.rank
    return (
        <div className='tweet'>
            <div>
                <div>{rank}</div>
                <img src={avatarURL} alt={`Avatar of ${name}`} className='avatar' />
            </div>
            <div className='tweet-info'>
                <div><h3>{name}</h3></div>
                <div>Answered Questions: {numAnswered}</div>
                <div>Created Questions: {numCreated}</div>
                <div>Score: {numAnswered + numCreated}</div>
            </div>
        </div>
    )
}

export default User