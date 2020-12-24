import { combineReducers } from 'redux'
import authReducer from './auth'
import { hotelReducer } from './hotel'
import {cityReducer} from "./city";

export const rootReducer = combineReducers({
    auth: authReducer,
    hotels: hotelReducer,
    city: cityReducer
})
