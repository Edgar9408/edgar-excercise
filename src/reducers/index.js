import {
    CREATE_USER,
    DELETE_USER,

} from "../actions"

const initialState = {
    users: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER: {
            return { ...state, users: state.users.concat(action.payload) }
        }
        case DELETE_USER: {
            return { ...state, users: state.users.filter(item => item.id !== action.payload) }
        }
        default:
            return state;
    }
}

export default rootReducer;