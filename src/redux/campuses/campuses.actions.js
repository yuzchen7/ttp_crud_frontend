import axios from "axios"

import Campuses_Action_type from './campuses.types'

// get all campuses data
export const fetchAllCampuses = (payload) => {
    console.log("MESSAGE : FETCH ALL CAMPUSES ACTION");
    return {
        type : Campuses_Action_type.FETCH_ALL_CAMPUSES,
        payload : payload
    };
};

export const fetchAllCampusesThunk = () => {
    return async (dispatch) => {
        try {
            console.log("MEASSGE : fetch_All_Campuses_Thunk is called");
            const resp = await axios.get('http://localhost:8080/api/campuses/');
            console.log("MEASSGE : fetch_All_Campuses_Thunk is Completed");
            dispatch(fetchAllCampuses(resp.data));
        } catch (err) {
            console.error(err);
        };
    };
};


// set single campus data with it all students
export const fetchSingleCampus = (payload) => {
    console.log("MESSAGE : FETCH SINGLE CAMPUS WITH STUDENT INFO ACTION");
    return {
        type : Campuses_Action_type.FETCH_SINGLE_CAMPUS,
        payload : payload
    };
};

export const fetchSingleCampusThunk = (id) => {
    return async (dispatch) => {
        try {
            console.log("MEASSGE : fetch_Single_Campus_Thunk is called");
            const resp = await axios.get('http://localhost:8080/api/campuses/findCampus?id=' + id);
            console.log("MEASSGE : fetch_Single_Campus_Thunk is Completed");
            dispatch(fetchSingleCampus(resp.data));
        } catch (err) {
            console.error(err);
        }
    };
};


// insert new data
export const fetchInsertCampus = () => {
    console.log("MESSAGE : FETCH INSERT NEW CAMPUS RECORD");
    return {
        type : Campuses_Action_type.FETCH_INSERT_CAMPUSES 
    };
};

export const fetchInsertCampusThunk = (newCampus) => {
    return async (dispatch) => {
        try {
            // console.log("MESSAGE :", newCampus);
            console.log("MEASSGE : fetch_Insert_Campus_Thunk is called");
            await axios.post("http://localhost:8080/api/campuses/insertCampus", newCampus);
            console.log("MEASSGE : fetch_Insert_Campus_Thunk is Completed");
            dispatch(fetchInsertCampus());
        } catch (err) {
            console.error(err);
        }
    };
};


// edit campus data
export const fetchEditCampus = () => {
    console.log("MESSAGE : FETCH EDIT CAMPUS RECORD");
    return {
        type : Campuses_Action_type.FETCH_EDIT_CAMPUS
    };
};

export const fetchEditCampusThunk = (editCampus) => {
    return async (dispatch) => {
        try {
            console.log("MEASSGE : fetch_Edit_Campus_Thunk is called");
            await axios.post('http://localhost:8080/api/campuses/editCampus', editCampus);
            console.log("MEASSGE : fetch_Edit_Campus_Thunk is Completed");
            dispatch(fetchEditCampus());
        } catch (err) {
            console.error(err);
        }
    };
};


// delete campus reord
export const fetchDeleteCampus = () => {
    console.log("MESSAGE : FETCH DELETE CAMPUS RECORD");
    return {
        type : Campuses_Action_type.FETCH_DELETE_CAMPUSES
    };
};

export const fetchDeleteCampusThunk = (id) => {
    return async (dispatch) => {
        try {
            console.log("MEASSGE : fetch_Edit_Campus_Thunk is called");
            await axios.delete('http://localhost:8080/api/campuses/deleteCampus?id=' + id);
            console.log("MEASSGE : fetch_Edit_Campus_Thunk is Completed");
            dispatch(fetchDeleteCampus());
        } catch (err) {
            console.error(err);
        }
    };
};