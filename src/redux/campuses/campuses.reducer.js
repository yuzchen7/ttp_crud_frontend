import Campuses_Action_type from './campuses.types'

export const INITAL_CAMPUS_STATE = {
    allCampuses : []
};

export const campusesReducer = (state = INITAL_CAMPUS_STATE, {type, payload}) => {
    console.log('CAMPUSESREDUCER IS HANDLING FETCH ALL CAMPUSES ACTION');
    switch (type) {
        case Campuses_Action_type.FETCH_ALL_CAMPUSES : 
            return {
                ...state,
                allCampuses : payload
            }
        default :
            return state
    }
};

export default campusesReducer;