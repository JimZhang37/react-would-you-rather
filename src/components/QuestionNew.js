import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

function QuestionNew({ authedUser, dispatch }) {
    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')
    const [toHome, setToHome] = useState(false)

    const handleOptionOne = (e) => {
        setOptionOne(e.target.value)
    }
    const handleOptionTwo = (e) => {
        setOptionTwo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const question = {
            author: authedUser,
            optionOneText: optionOne,
            optionTwoText: optionTwo
        }
        dispatch(handleSaveQuestion(question))
        
        setOptionOne('')
        setOptionTwo('')
        setToHome(true)

    }

    if(toHome){
        return (
            <Redirect to='/' />
        )
    }
    return (
        <div>
            <h2>Create New Question</h2>
            <div>

                Would you rather?
                <form onSubmit={handleSubmit}>
                    <div>
                        <input value={optionOne} onChange={handleOptionOne}></input>
                    </div>
                    <div>
                        Or
                    </div>
                    <div>
                        <input value={optionTwo} onChange={handleOptionTwo}></input>

                    </div>
                    <button >Submit</button>
                </form>
            </div>

        </div>
    )
}

function mapStateToProps({ authedUser }) {

    return {
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionNew)