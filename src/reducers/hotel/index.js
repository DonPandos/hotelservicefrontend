const initialState = {
    hotelList: []
};

export const hotelReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_HOTELS':
            return { ...state, hotelList: action.payload };
        default:
            return state; 
    }
}

