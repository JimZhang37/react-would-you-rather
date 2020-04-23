import {getInitialData} from '../utils/api'
import {receiveQuestions} from './questions'
import {receivUsers} from './users'

export function handleInitialData(){
    return (dispatch) => {
        return getInitialData().then(
            ({questions, users})=>{
                dispatch(receiveQuestions(questions))
                dispatch(receivUsers(users))
            }
        )
    }
}