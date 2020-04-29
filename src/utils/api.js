import {
    _getQuestions,
    _getUsers
} from './_DATA'

export function getInitialData(){
    return Promise.all([
        _getQuestions(),
        _getUsers(),
    ]).then(([questions, users])=>({questions,users,

    }))
}

export function authorizeUser(user){
    return _getUsers().then((users)=>
        Object.values(users).some(it => it.id === user)
    )


}

