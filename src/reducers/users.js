import {RECEIVE_DATA} from "../actions/shared"
import { SAVE_QUESTION_ANSWER } from "../actions/questions"

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
        default:
            return state
    }
}