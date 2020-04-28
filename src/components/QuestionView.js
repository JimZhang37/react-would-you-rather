import React, {  useState } from "react"
import { handleSaveQuestionAnswer } from '../actions/questions'
import { connect } from 'react-redux'
import QuestionResult from './QuestionResult'
import { Redirect } from "react-router-dom"
function QuestionView({user,question, dispatch, hasAnswered, id,  answer, authedUser }) {
    const [choice, setChoice] = useState('optionOne')
    if(typeof question === "undefined"){
        return(
            <Redirect to='/not_found' />
        )
    }
    const author = question.author
    
    const option1 = question.optionOne.text
    const option2 = question.optionTwo.text
    
    const handleChange= (e)=>{
        setChoice(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(choice)
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
        // console.log(option11,'option11')
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
                <label >{option1}</label>
                <input
                    type='radio'
                    id='option2'
                    key={option2}
                    value='optionTwo'
                    defaultChecked={false}
                    onChange={handleChange}
                    name='choice'
                />
                <label >{option2}</label>
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

    // console.log('answer', answer, user, id)
    const question = questions[id]
    // console.log(question)
    return {
        hasAnswered,
        
        id,
        
        answer,
        authedUser,
        user,
        question
    }
}

export default connect(mapStateToProps)(QuestionView)