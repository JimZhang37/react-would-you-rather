import {RECEIVE_DATA} from "../actions/shared"
import { SAVE_QUESTION_ANSWER, SAVE_QUESTION } from "../actions/questions"

export default function users(state={}, action){
    switch(action.type){
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.users
            }
        case SAVE_QUESTION_ANSWER:
            return {
                ...state,
                ...action.users
            }
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])

                }
            }
        default:
            return state
    }
}