import { combineReducers } from "redux";
import studentsReducer from "./students/students.reducer";

const rootReducer = combineReducers({
    students: studentsReducer,
});

export default rootReducer;