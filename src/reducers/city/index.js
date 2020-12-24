const initialState = {
    cities: []
}

export const cityReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CITIES':
            return { ...state, cities: action.payload}
        default:
            return state
    }
}