export function saveUserData(user) {
    return {
        type: 'SET_USER ',
        payload: {
            user
        }
    }
}