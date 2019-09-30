import { combineReducers, createStore } from "redux"
import jobs from "./reducers/jobs"

const rootReducer = combineReducers({
    jobs
})

export default createStore(rootReducer)
