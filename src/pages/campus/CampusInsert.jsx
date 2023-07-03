import React from "react";
import { useDispatch } from "react-redux";
import { fetchInsertCampusThunk } from "../../redux/campuses/campuses.actions";
import { Link } from "react-router-dom";

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
        <div>
            <h1>Insert Campus Page</h1>
            <form onSubmit={submition}>
                <label>Name : </label>
                <input id='name' type="text" required placeholder="name..." /> <br />
                <label>Address : </label>
                <input id='address' type="text" required placeholder="address..." /> <br />
                <label>Image Url : </label>
                <input id='imageUrl' type="text" placeholder="url..." /> <br />
                <label>Description : </label>
                <input id='description' type="text" placeholder="description..." /> <br />
                <input type="submit" />
            </form>
            <Link to='/campuses'>
                <button>return</button>
            </Link>
        </div>
    );
};

export default CampusInsert;