import { combineReducers } from "redux"
import middlewareReducers from "./middlewareReducers"
import counterReducers from "./counterReducers"

const allreducers = combineReducers({
    midware: middlewareReducers,
    counter: counterReducers
})

export default allreducers
