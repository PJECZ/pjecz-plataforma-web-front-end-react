import React, { useReducer} from 'react'

import { Profile } from '../../actions/AuthActions'

import UserContext from './UserContext'
import UserReducer from './UserReducer'


const UserState = (props) => {

    const initialState = {
        isLogged: false,
        username: null,
        permissions: []
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUser = async () => {
        const response = await Profile()
        dispatch({
            type: 'GET_USER',
            payload: {
                isLogged: (response.status === 200),
                username: (response.status === 200) ? response.data.username : null,
                permissions: (response.status === 200) ? response.data.permissions : []
            }
        })
    }

    const setLogInUser = (isLogged, username, permissions) => {
        dispatch({
            type: 'SET_LOG_IN_USER',
            payload: {
                isLogged,
                username,
                permissions
            }
        })
    }

    const setLogOutUser = () => {
        dispatch({
            type: 'SET_LOG_OUT_USER',
            payload: initialState
        })
    }

    return(
        <UserContext.Provider value={{
            isLogged: state.isLogged,
            username: state.username,
            permissions: state.permissions,
            getUser,
            setLogInUser,
            setLogOutUser
        }}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserState
