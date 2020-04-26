import React, { Component } from "react"
import {handleSaveQuestionAnswer} from '../actions/questions'
import { connect } from 'react-redux'
function QuestionView({dispatch, hasAnswered, id, author, option1, option2, answer, authedUser }) {

    if (hasAnswered) {
        return (
            <div>
                <div>{author} asks</div>
                <div>{answer}</div>
            </div>
        )
    }

    return (
        <div>
            <div>{author} asks</div>
            <form onSubmit={(event)=>{event.preventDefault();dispatch(handleSaveQuestionAnswer(authedUser, id, 'optionOne'))}}>
            <input
                    type='radio'
                    id='option1'
                    key={option1}
                    value={option1}
                    defaultChecked={false}
                />
                <label for='option1'>{option1}</label>
                <input
                    type='radio'
                    id='option2'
                    key={option2}
                    value={option2}
                    defaultChecked={false}
                />
                <label for='option2'>{option2}</label>
                <button type="submit">Submit</button>
            </form>
            <div>
               
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
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

    }
}

export default connect(mapStateToProps)(QuestionView)