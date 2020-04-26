import {RECEIVE_DATA} from "../actions/shared"
import { SAVE_QUESTION_ANSWER } from "../actions/questions"

export default function questions(state={}, action){
    switch(action.type){
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION_ANSWER:
            return {
                ...state,
                ...action.question
            }
        default:
            return state
    }
}