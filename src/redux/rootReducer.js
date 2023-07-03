import { combineReducers } from "redux";
import studentsReducer from "./students/students.reducer";
import campusesReducer from "./campuses/campuses.reducer";

const rootReducer = combineReducers({
    students: studentsReducer,
    campuses: campusesReducer
});

export default rootReducer;