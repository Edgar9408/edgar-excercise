export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";

export function createUser(user) {
    return function (dispatch) {
        dispatch({ type: CREATE_USER, payload: user })
    }
}

export function deleteUser(userId) {
    return function (dispatch) {
        dispatch({ type: DELETE_USER, payload: userId })
    }
}
