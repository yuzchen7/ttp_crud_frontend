import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchEditCampusThunk } from "../../redux/campuses/campuses.actions";

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
        console.log(editCampus);

        window.location.href = '/campuses';
    }

    return (
        <div>
            <h1>Campus Edit Page</h1>
            <form onSubmit={submit}>
                <label>Campus ID : {campus.id} </label> <br />
                <label>Name : </label>
                <input id='name' type="text" required defaultValue={campus.name} /> <br />
                <label>Address : </label>
                <input id='address' type="text" required defaultValue={campus.address} /> <br />
                <label>Image Url : </label>
                <input id='imageUrl' type="text" defaultValue={campus.imageUrl} /> <br />
                <label>Description : </label>
                <input id='description' type="text" defaultValue={campus.description} /> <br />
                <input type="submit" value='Edit' />
            </form>
        </div>
    );
};

export default CampusEdit;