import { get } from "react-hook-form";
import API from '../../utils/API'

const initialState = {
    hotelList: []
};

export const hotelReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_HOTELS':
            console.log(action.payload)
            return { ...state, hotelList: action.payload };
        default:
            return state; 
    }
}

