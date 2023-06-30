import axios from "axios";

import Student_Action_type from "./students.types";

export const fetchAllStudents = (payload) => {
    console.log("MESSAGE : FETCH ALL STUDENTS ACTION");
    return {
        type : Student_Action_type.FETCH_ALL_STUDENTS,
        payload : payload
    };
};

export const fetchAllStudentsThunk = () => {
    return async (dispatch) => {
        try {
            console.log("MEASSGE : fetch_All_Students_Thunk is called");
            const resp = await axios.get('http://localhost:8080/api/students/');
            console.log("MEASSGE : fetch_All_Students_Thunk is Completed");
            dispatch(fetchAllStudents(resp.data));
        } catch (err) {
            console.log(err);
        }
    };
}