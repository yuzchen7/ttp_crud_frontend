import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampusesThunk } from "../../redux/campuses/campuses.actions";
import { fetchInsertStudentThunk } from "../../redux/students/students.actions";

const StudentInsert = () => {
    const allCampuses = useSelector((state) => {
        console.log("state : ", state.campuses.allCampuses);
        return state.campuses.allCampuses;
    });

    const dispatch = useDispatch();

    if (allCampuses.length === 0) {
        dispatch(fetchAllCampusesThunk());
    }

    const insertNewStudent = (e) => {
        e.preventDefault();

        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const gpa = document.getElementById('gpa').value;
        const imageUrl = document.getElementById('imageUrl').value;
        const campusId = document.getElementById('campusId').value;

        const newStudent = {
            firstName, lastName, email, gpa, campusId
        };

        if (imageUrl != '') {
            newStudent['imageUrl'] = imageUrl;
        }

        dispatch(fetchInsertStudentThunk(newStudent));
        var r = window.confirm('back to view all page');
        if (r === true) {
            window.location.href = '/students';
        }
    }

    return (
        <div>
            <h1>Insert Student Page</h1>
            <span>
                <form onSubmit = {insertNewStudent}>
                    <label>First Name : </label>
                    <input id='fname' type="text" placeholder = "First Name..." required /><br/>
                    <label>Last Name : </label>
                    <input id='lname' type="text" placeholder = "Last Name..." required /><br/>
                    <label>Email : </label>
                    <input id='email' type="text" placeholder = "Email..." required /><br/>
                    <label>GPA : </label>
                    <input id='gpa' type="number" min="0" max="4" step = "0.01" placeholder = "GPA" /><br/>
                    <label>Image URL : </label>
                    <input id='imageUrl' type="text" placeholder = "Image Url..." /><br/>
                    <label>Campus : </label>
                    <select id="campusId" required>
                        <option> Select a Campus </option>
                            {
                                allCampuses.map((campus) => {
                                    return <option key={`campus_${campus.id}`} value={campus.id}> {campus.name} </option>
                                })
                            }
                    </select>
                    <br />
                    <input type="submit" value="Insert"/>
                </form>
            </span>
        </div>
    );
};

export default StudentInsert;