import { authorizeUser } from '../utils/api'
export const AUTHED_USER = 'AUTHED_USER'

export function authUser(user) {
    return {
        type: AUTHED_USER,
        user: user
    }
}

export function handleAuthUser(user) {

    return (dispatch) => {

        return authorizeUser(user)
            .then((authorized) => {
                if(authorized){
                    dispatch(authUser(user))
                }
            }
            )
            
    }
}

