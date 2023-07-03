import Student_Action_type from './students.types'

export const INITAL_STUDENT_STATE = {
    allStudents : []
};

export const studentReducer = (state = INITAL_STUDENT_STATE, {type, payload}) => {
    console.log('STUDENTREDUCER IS HANDLING FETCH ALL STUDENTS ACTION')
    switch (type) {
        case Student_Action_type.FETCH_ALL_STUDENTS:
            return {
                ... state,
                allStudents: payload
            }
        default:
            return state;
    }
};

export default studentReducer;