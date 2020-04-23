export const RECEIVE_USERS = "RECEIVE_USERS"

export function receivUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}