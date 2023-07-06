import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllStudentsThunk } from "../../redux/students/students.actions";
import StudentItemList from "../../components/student/StudentItemList";

import "./css/Students.css";

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
        <div id='students_contents'>
            <h1>Student Page</h1>
            <hr />
            <StudentItemList data={allStudents} />
            <hr />
            <Link to='/student_insert'>
                <button class='button' id='students_insertbtn'>insert new student</button>
            </Link>
            <br /> <br /> <br /> <br /> <br /> <br />
        </div>
    );
};

export default Students;