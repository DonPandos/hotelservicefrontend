
const initialState = {
    isLoggedIn: false,
    token: '',
    username: '',
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TOKEN':
            return { ...state, token: action.payload }
        case 'SET_LOGGED_IN':
            return { ...state, isLoggedIn: action.payload }
        case 'SET_USERNAME':
            return { ...state, username: action.payload }
        default:
            return state;
    }
}

export default authReducer;