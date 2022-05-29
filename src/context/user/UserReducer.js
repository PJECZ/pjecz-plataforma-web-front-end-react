import { GET_USER, SET_LOG_IN_USER, SET_LOG_OUT_USER } from "../Types";

const UserReducer = (state, action) => {

    const { type, payload } = action

    switch (type) {
        case GET_USER:
            return {
                ...state,
                isLogged: payload.isLogged,
                username: payload.username,
                permissions: payload.permissions
            }
        case SET_LOG_IN_USER:
            return {
                ...state,
                isLogged: payload.isLogged,
                username: payload.username,
                permissions: payload.permissions
            }
        case SET_LOG_OUT_USER:
            return {
                ...state,
                isLogged: payload.isLogged,
                username: payload.username,
                permissions: payload.permissions
            }
        default:
            return state
    }
}

export default UserReducer
