import React from "react";
import { useDispatch } from "react-redux";
import { fetchInsertCampusThunk } from "../../redux/campuses/campuses.actions";
import { Link } from "react-router-dom";

import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

import "./css/CampusInsert.css";

const CampusInsert = () => {
    const dispatch = useDispatch();

    const submition = async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const imageUrl = document.getElementById('imageUrl').value;
        const description = document.getElementById('description').value;

        const newCampus = {
            name,
            address,
        };

        if (imageUrl != '') {
            newCampus['imageUrl'] = imageUrl;
        }

        if (description != '') {
            newCampus['description'] = description;
        }

        console.log(newCampus);
        dispatch(fetchInsertCampusThunk(newCampus));
    };

    return (
        <div id='campus_insert_contents' >
            <h1>Insert Campus Page</h1>
            <br />
            <Form onSubmit={submition}>
                <InputGroup className='mb-3'>
                    <InputGroup.Text>Name : </InputGroup.Text>
                    <Form.Control id='name' class='inputcontents' type='text' placeholder="name" required />
                </InputGroup>
                <InputGroup className='mb-3'>
                    <InputGroup.Text>Address : </InputGroup.Text>
                    <Form.Control id='address' class='inputcontents' type="text" required placeholder="address..." />
                </InputGroup>
                <InputGroup className='mb-3'>
                    <InputGroup.Text>Image Url : </InputGroup.Text>
                    <Form.Control id='imageUrl' class='inputcontents' type="text" placeholder="url..." />
                </InputGroup>
                <InputGroup className='mb-3'>
                    <InputGroup.Text>Description : </InputGroup.Text>
                    <Form.Control id='description' class='inputcontents' type="text" placeholder="description..." />
                </InputGroup>
                <br />
                <div>
                    <input type="button" class='button' id='back' value='← Back' onClick={() => {window.history.back()}}/>
                    <input type="submit" class='button' id='edit_insertbtn' value='insert' />
                </div>
            </Form>
        </div>
    );
};

export default CampusInsert;