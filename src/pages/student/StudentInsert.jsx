import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampusesThunk } from "../../redux/campuses/campuses.actions";
import { fetchInsertStudentThunk } from "../../redux/students/students.actions";

import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

import './css/StudentInsert.css'

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
        <div id='student_insert_contents'>
            <h1>Insert Student Page</h1>
            <br />
            <Form onSubmit = {insertNewStudent}>
                <InputGroup className='mb-3'>
                    <InputGroup.Text>First Name : </InputGroup.Text>
                    <Form.Control class='inputcontents' id='fname' type="text" placeholder = "First Name..." required />
                </InputGroup>
                <InputGroup className='mb-3'>
                    <InputGroup.Text>Last Name : </InputGroup.Text>
                    <Form.Control class='inputcontents' id='lname' type="text" placeholder = "Last Name..." required />
                </InputGroup>
                <InputGroup className='mb-3'>
                    <InputGroup.Text>Email : </InputGroup.Text>
                    <Form.Control class='inputcontents' id='email' type="text" placeholder = "Email..." required />
                </InputGroup>
                <InputGroup className='mb-3'>
                    <InputGroup.Text>GPA : </InputGroup.Text>
                    <Form.Control class='inputcontents' id='gpa' type="number" min="0" max="4" step = "0.01" placeholder = "GPA" />
                </InputGroup>
                <InputGroup className='mb-3'>
                    <InputGroup.Text>Image URL : </InputGroup.Text>
                    <Form.Control class='inputcontents' id='imageUrl' type="text" placeholder = "Image Url..." />
                </InputGroup>
                <InputGroup className='mb-3'>
                    <InputGroup.Text>Campus : </InputGroup.Text>
                    <Form.Select id="campusId" required>
                        <option> Select a Campus </option>
                        {
                            allCampuses.map((campus) => {
                                return <option key={`campus_${campus.id}`} value={campus.id}> {campus.name} </option>
                            })
                        }
                    </Form.Select>
                </InputGroup>
                <br />
                <div>
                    <input type="button" class='button' id='back' value='← Back' onClick={() => {window.history.back()}}/>
                    <input type="submit" class='button' id='studnet_insertbtn' value="Insert"/> 
                </div>
            </Form>
        </div>
    );
};

export default StudentInsert;