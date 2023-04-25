import { combineReducers } from "redux";
import {reducer} from './reducer.js'

const rootReducer = combineReducers({
    reducer : reducer
}) 

export default rootReducer
