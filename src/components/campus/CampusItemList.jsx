import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDeleteCampusThunk } from "../../redux/campuses/campuses.actions";

export default function CampusItemList(props) {
    const dispatch = useDispatch();

    const deleteCampus = async (campus_id) => {
        dispatch(fetchDeleteCampusThunk(campus_id));
        var r = window.confirm('reload the page');
        if (r === true) {
            window.location.reload();
        }
    }

    return props.data && props.data.length !== 0 ? (
        props.data.map((campus) => {
            return (
                <div id={campus.id} key={`campus${campus.id}`} >
                    <span width='50px'>
                        <img src={campus.imageUrl} width='50px' alt="not found" />
                    </span>
                    <span>
                        <p>
                            Campus Name : {campus.name} <br />
                            Address : {campus.address} <br />
                            Description : {campus.description} <br />
                            Number of Students : {campus.studentsNum} <br />
                        </p>
                    </span>
                    <Link to='/campus_edit' state={campus}>
                        <button>Edit</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/campus_single_view' state={campus.id} >
                        <button>Single View</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button id='deleteBtn' onClick={(e) => {e.preventDefault(); deleteCampus(campus.id)}}>Delete</button>
                    <hr />
                </div>
            );
        })
    ) : (
        <div>
            <h1> There is not Student Data fount </h1>
            <h1> or loading.... </h1>
        </div>
    );
};
