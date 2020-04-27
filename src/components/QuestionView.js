import React, { Component, useState } from "react"
import { handleSaveQuestionAnswer } from '../actions/questions'
import { connect } from 'react-redux'
import QuestionResult from './QuestionResult'
function QuestionView({user,question, dispatch, hasAnswered, id, author, option1, option2, answer, authedUser }) {
    const [choice, setChoice] = useState('optionOne')
    const handleChange= (e)=>{
        setChoice(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(choice)
        dispatch(handleSaveQuestionAnswer(authedUser, id, choice))

    }
    if (hasAnswered) {
        const countOne = question.optionOne.votes.length
        const countTwo = question.optionTwo.votes.length
        const avatarURL = user.avatarURL
        const option11 = {
            text: question.optionOne.text,
            count: countOne,
            total: countOne+countTwo,
            yourChoice: true,
            
        }
        const option21 = {
            text: question.optionTwo.text,
            count: countTwo,
            total: countOne+countTwo,
            yourChoice: false,
        }
        console.log(option11,'option11')
        return (

            <QuestionResult value = {{author, option11, option21, avatarURL}}/>
        )
    }

    return (
        <div>
            <div>{author} asks</div>
            <form onSubmit={(e) => handleSubmit(e) }>
                <input
                    type='radio'
                    id='option1'
                    key={option1}
                    value='optionOne'
                    defaultChecked={false}
                    onChange={handleChange}
                    name='choice'
                />
                <label for='option1'>{option1}</label>
                <input
                    type='radio'
                    id='option2'
                    key={option2}
                    value='optionTwo'
                    defaultChecked={false}
                    onChange={handleChange}
                    name='choice'
                />
                <label for='option2'>{option2}</label>
                <button type="submit">Submit</button>
            </form>
   
        </div>


    )

}

function mapStateToProps({ questions, users, authedUser }, { id }) {
    // console.log('props', props)
    const user = users[authedUser]
    const hasAnswered = Object.keys(user.answers).includes(id)
    const answer = hasAnswered ? user.answers[id] : null

    console.log('answer', answer, user, id)
    const question = questions[id]

    return {
        hasAnswered,
        author: question.author,
        id,
        option1: question.optionOne.text,
        option2: question.optionTwo.text,
        answer,
        authedUser,
        user,
        question
    }
}

export default connect(mapStateToProps)(QuestionView)