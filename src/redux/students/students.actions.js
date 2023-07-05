import axios from "axios";

import Student_Action_type from "./students.types";

// get all students info
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
            console.error(err);
        }
    };
}


// enroll student campus
export const fetchEnrollStudent = (payload) => {
    console.log("MESSAGE : FETCH ENROLL STUDENTS ACTION");
    return {
        type : Student_Action_type.FETCH_ENROLL_STUDENT,
    };
};

export const fetchEnrollStudentThunk = (updateData) => {
    return async (dispatch) => {
        try {
            console.log("MEASSGE : fetch_Enroll_Student_Thunk is called");
            const resp = await axios.post('http://localhost:8080/api/students/enrollCampusStuent', updateData);
            console.log("MEASSGE : fetch_Enroll_Student_Thunk is Completed");
            dispatch(fetchEnrollStudent(resp.data));
        } catch (err) {
            console.error(err);
        }
    };
};

//get single student info
export const fetchSingleStudent = (payload) => {
    console.log("MESSAGE : FETCH Single STUDENTS ACTION");
    return {
        type : Student_Action_type.FETCH_SINGLE_STUDENT,
        payload : payload
    };
};

export const fetchSingleStudentThunk = (studentId) => {
    return async (dispatch) => {
        try {
            console.log("MEASSGE : fetch_Single_Student_Thunk is called");
            const resp = await axios.get('http://localhost:8080/api/students/findStudent?id=' + studentId);
            console.log("MEASSGE : fetch_Single_Student_Thunk is Completed");
            // console.log(resp.data);
            dispatch(fetchSingleStudent(resp.data));
        } catch (err) {
            console.error(err);
        }
    };
};

// insert student
export const fetchInsertStudent = () => {
    console.log("MESSAGE : FETCH Insert STUDENTS ACTION");
    return {
        type : Student_Action_type.FETCH_INSERT_STUDENT
    };
};

export const fetchInsertStudentThunk = (insertStudent) => {
    return async (dispatch) => {
        try {
            console.log("MEASSGE : fetch_Insert_Student_Thunk is called");
            await axios.post('http://localhost:8080/api/students/insertStudent', insertStudent);
            console.log("MEASSGE : fetch_Insert_Student_Thunk is Completed");
            dispatch(fetchInsertStudent());
        } catch (err) {
            console.error(err);
        }
    };
};


// update student info
export const fetchEditStduent = () => {
    console.log("MESSAGE : FETCH Edit STUDENTS ACTION");
    return {
        type : Student_Action_type.FETCH_EDIT_STUDENT
    };
};

export const fetchEditStudentThunk = (editStudent) => {
    return async (dispatch) => {
        try {
            console.log("MEASSGE : fetch_Edit_Student_Thunk is called");
            await axios.post('http://localhost:8080/api/students/editStudent', editStudent);
            console.log("MEASSGE : fetch_Edit_Student_Thunk is Completed");
            dispatch(fetchEditStduent());
        } catch (err) {
            console.error(err);
        }
    };
};
