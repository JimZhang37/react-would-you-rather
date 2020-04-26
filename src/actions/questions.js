import { _saveQuestionAnswer } from '../utils/_DATA'
import { getInitialData } from '../utils/api'

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function saveQuestionAnswer(users, questions) {

    return {
        type: SAVE_QUESTION_ANSWER,
        users,
        questions
    }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
    return (dispatch) => {
        return _saveQuestionAnswer({ authedUser, qid, answer }).then(()=>
            // ({users, questions})=>{
            //     dispatch(saveQuestionAnswer({users, questions}))
            // }
            {
                console.log('saved successfully')
                getInitialData().then(
                ({ users, questions }) => {
                    dispatch(saveQuestionAnswer(users, questions))
                }
            )}
        )
    }
}