import axios from "axios"

import Campuses_Action_type from './campuses.types'

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
            console.log(err);
        };
    };
};