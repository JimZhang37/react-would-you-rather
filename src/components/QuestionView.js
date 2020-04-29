import React from "react"
import { handleSaveQuestionAnswer } from '../actions/questions'
import { connect } from 'react-redux'
import QuestionResult from './QuestionResult'
import { Redirect } from "react-router-dom"
import QuestionNotAnswered from './QuestionNotAnswered'
function QuestionView({ user, question, dispatch, hasAnswered,  answer, authedUser }) {

    if (typeof question === "undefined") {
        return (
            <Redirect to='/not_found' />
        )
    }

    const handleSubmit = (e, c) => {
        e.preventDefault()
        dispatch(handleSaveQuestionAnswer(authedUser, question.id, c))
    }

    if (hasAnswered) {
        const countOne = question.optionOne.votes.length
        const countTwo = question.optionTwo.votes.length
        const value = {
            author: question.author,
            option11: {
                text: question.optionOne.text,
                count: countOne,
                total: countOne + countTwo,
                yourChoice: answer === 'optionOne' ? true : false,
            },
            option21: {
                text: question.optionTwo.text,
                count: countTwo,
                total: countOne + countTwo,
                yourChoice: answer === 'optionOne' ? false : true,
            },
            avatarURL: user.avatarURL
        }
        return (
            <QuestionResult value={value} />
        )
    }
    else {
        const value = {
            author: question.author,
            option1: question.optionOne.text,
            option2: question.optionTwo.text
        }
        return (
            <QuestionNotAnswered value={value} handleSubmit={handleSubmit} />
        )
    }
}



function mapStateToProps({ questions, users, authedUser }, { id }) {
    // console.log('props', props)
    const user = users[authedUser]
    const hasAnswered = Object.keys(user.answers).includes(id)
    const answer = hasAnswered ? user.answers[id] : null
    const question = questions[id]

    return {
        hasAnswered,
        answer,
        authedUser,
        user,
        question
    }
}

export default connect(mapStateToProps)(QuestionView)