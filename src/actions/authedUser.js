export const AUTHED_USER = 'AUTHED_USER'

export function authUser(user){
    return {
        type: AUTHED_USER,
        user: user
    }
}

