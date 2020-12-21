

const initialState = {
    isLoggedIn: false,
    token: '',
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TOKEN':
            return { ...state, token: action.payload }
        case 'SET_LOGGED_IN':
            console.log('reduced')
            return { ...state, isLoggedIn: action.payload }
        default:
            return state;
    }
}

export default authReducer;