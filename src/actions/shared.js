import {getInitialData} from '../utils/api'
import {receiveQuestions} from './questions'
import {receivUsers} from './users'

export const RECEIVE_DATA ='RECEIVE_DATA'

export function receiveData({questions, users}){
    return {
        type: RECEIVE_DATA,
        questions,
        users
    }
}

export function handleInitialData(){
    return (dispatch) => {
        return getInitialData().then(
            ({questions, users})=>{
                // dispatch(receiveQuestions(questions))
                // dispatch(receivUsers(users))
                dispatch(receiveData({questions, users}))
            }
        )
    }
}