import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudentsThunk } from "../../redux/students/students.actions";
import StudentItemList from "../../components/StudentItemList";

const Students = () => {
    const allStudents = useSelector((state) => {
        console.log("state : ", state.students.allStudents);
        return state.students.allStudents;
    });

    const dispatch = useDispatch();

    const fetachAllStudents = () => {
        console.log("MESSAGE : RUNNING DISPATCH FROM STUDENT fetachAllStudents");
        return dispatch(fetchAllStudentsThunk());
    };

    useEffect(() => {
        console.log("MESSAGE : FETCH ALL STUEDENT RUNNING IN USEEFFECT");
        fetachAllStudents();
    }, []);

    return (
        <div>
            <h1>Student Page</h1>
            <StudentItemList data={allStudents} />
        </div>
    );
};

export default Students;