import {act} from "@testing-library/react";

const initialState = {
    isLoggedIn: false,
    token: '',
    username: '',
    firstname: '',
    lastname: '',
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TOKEN':
            return { ...state, token: action.payload }
        case 'SET_LOGGED_IN':
            return { ...state, isLoggedIn: action.payload }
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.payload.username,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname
            }
        default:
            return state;
    }
}

export default authReducer;