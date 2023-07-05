import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchAllCampusesThunk } from "../../redux/campuses/campuses.actions";
import { fetchEditStudentThunk } from "../../redux/students/students.actions";

const StudentEdit = () => {
    const student = useLocation().state;
    const studentCampus = student.campus;

    const allCampuses = useSelector((state) => {
        console.log("state : ", state.campuses.allCampuses);
        return state.campuses.allCampuses;
    });

    const dispatch = useDispatch();

    if (allCampuses.length === 0) {
        dispatch(fetchAllCampusesThunk());
    }

    const editStudent = (e) => {
        e.preventDefault();

        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const gpa = parseFloat(document.getElementById('gpa').value);
        const imageUrl = document.getElementById('imageUrl').value;
        const campusId = document.getElementById('campusId').value;

        const editStudent = {
            id : student.id,
            firstName, lastName, email, gpa, campusId
        };

        if (imageUrl == '') {
            editStudent['imageUrl'] = student.imageUrl;
        }
        console.log(editStudent);
        dispatch(fetchEditStudentThunk(editStudent));
        
        var r = window.confirm('back to view all page');
        if (r === true) {
            window.location.href = '/students'
        }
    };

    return (
        <div>
            <h1>Student Edit Page</h1>
            <span>
                <form onSubmit = {editStudent}>
                    <label>First Name : </label>
                    <input id='fname' type="text" defaultValue={student.firstName} required /><br/>
                    <label>Last Name : </label>
                    <input id='lname' type="text" defaultValue={student.lastName} required /><br/>
                    <label>Email : </label>
                    <input id='email' type="text" defaultValue={student.email} required /><br/>
                    <label>GPA : </label>
                    <input id='gpa' type="number" min="0" max="4" step = "0.01" defaultValue={student.gpa} /><br/>
                    <label>Image URL : </label>
                    <input id='imageUrl' type="text" defaultValue={student.imageUrl} /><br/>
                    <label>Campus : </label>
                    <select id="campusId" required>
                        <option key={`campus_${studentCampus.id}`} value={studentCampus.id}> {studentCampus.name} </option>
                        {
                            allCampuses.map((campus) => {
                                if (campus.name === studentCampus.name) {
                                    return <></>
                                }
                                return <option key={`campus_${campus.id}`} value={campus.id}> {campus.name} </option>
                            })
                        }
                    </select>
                    <br />
                    <input type="submit" value="Edit"/>
                </form>
                <hr />
                <Link to='/students'>
                    <button>return view all Student</button>
                </Link>
            </span>
        </div>
    );
};

export default StudentEdit;