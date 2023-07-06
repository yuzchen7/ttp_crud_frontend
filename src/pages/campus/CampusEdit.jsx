import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchEditCampusThunk } from "../../redux/campuses/campuses.actions";

import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

import './css/CampusEdit.css'

const CampusEdit = () => {
    const campus = useLocation().state;
    console.log(campus);

    const campus_id = campus.id;
    const dispatch = useDispatch(); 

    const submit = (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const imageUrl = document.getElementById('imageUrl').value;
        const description = document.getElementById('description').value;

        const editCampus = {
            id : campus_id,
            name,
            address,
            imageUrl,
            description
        };

        dispatch(fetchEditCampusThunk(editCampus));
        var r = window.confirm('back to campuses page...')
        if (r === true) {
            window.location.href = '/campuses';
        }
    }

    return (
        <div>
            <h1>Campus Edit Page</h1> 
            <br />
            <div id='campus_edit_contents' >
                <Form onSubmit={submit}>
                    <Form.Group>
                        <Form.Label id='campusID'>Campus ID : {campus.id} </Form.Label>
                    </Form.Group>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Name : </InputGroup.Text>
                        <Form.Control id='name' class='inputcontents' type='text' required defaultValue={campus.name} />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Address : </InputGroup.Text>
                        <Form.Control id='address' type="text" required defaultValue={campus.address} />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Image Url : </InputGroup.Text>
                        <Form.Control id='imageUrl' type="text" defaultValue={campus.imageUrl} />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Description : </InputGroup.Text>
                        <Form.Control id='description' type="text" defaultValue={campus.description} />
                    </InputGroup>
                    <br />
                    <div>
                        <input type="button" class='button' id='back' value='← Back' onClick={() => {window.history.back()}}/>
                        <input type="submit" class='button' id='edit' value='Edit' />
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default CampusEdit;