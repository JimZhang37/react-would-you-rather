import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { getInitialData } from '../utils/api'

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const SAVE_QUESTION = 'SAVE_QUESTION'

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

export function saveQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function handleSaveQuestion(question) {
    return (dispatch) => {
        return _saveQuestion( question ).then((formated)=>
            // ({users, questions})=>{
            //     dispatch(saveQuestionAnswer({users, questions}))
            // }
            {
                dispatch(saveQuestion(formated))
            }
        )
    }
}