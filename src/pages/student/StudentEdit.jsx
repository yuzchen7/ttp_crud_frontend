import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchAllCampusesThunk } from "../../redux/campuses/campuses.actions";
import { fetchEditStudentThunk } from "../../redux/students/students.actions";

import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

import './css/StudentEdit.css'

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
            <br />
            <div id='student_edit_contents' >
                <Form onSubmit = {editStudent}>
                    <Form.Group>
                        <Form.Label id='studentID'>Student ID : {student.id}</Form.Label>
                    </Form.Group>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>First Name : </InputGroup.Text>
                        <Form.Control id='fname' type="text" defaultValue={student.firstName} required />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Last Name : </InputGroup.Text>
                        <Form.Control id='lname' type="text" defaultValue={student.lastName} required />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Email : </InputGroup.Text>
                        <Form.Control id='email' type="text" defaultValue={student.email} required />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>GPA : </InputGroup.Text>
                        <Form.Control id='gpa' type="number" min="0" max="4" step = "0.01" defaultValue={student.gpa} />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Image URL : </InputGroup.Text>
                        <Form.Control id='imageUrl' type="text" defaultValue={student.imageUrl} />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Campus : </InputGroup.Text>
                        <Form.Select id="campusId" required>
                            <option key={`campus_${studentCampus.id}`} value={studentCampus.id}> {studentCampus.name} </option>
                            {
                                allCampuses.map((campus) => {
                                    if (campus.name === studentCampus.name) {
                                        return <></>
                                    }
                                    return <option key={`campus_${campus.id}`} value={campus.id}> {campus.name} </option>
                                })
                            }
                        </Form.Select>
                    </InputGroup>
                    <br />
                    <div>
                        <input type="button" class='button' id='back' value='← Back' onClick={() => {window.history.back()}}/>
                        <input type="submit" class='button' id='edit' value="Edit"/>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default StudentEdit;