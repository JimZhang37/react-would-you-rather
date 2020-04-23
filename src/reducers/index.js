import questions from './questions'
import users from './users'
import {combineReducers} from 'redux'

export default combineReducers(
    {
        questions,
        users,
    }
)