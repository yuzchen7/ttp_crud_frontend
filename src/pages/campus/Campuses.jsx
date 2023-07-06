import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampusesThunk } from "../../redux/campuses/campuses.actions"; 
import { Link } from "react-router-dom";
import CampusItemList from "../../components/campus/CampusItemList";

import './css/Campuses.css';

const Campuses = () => {
    const allCampuses = useSelector((state) => {
        console.log("state : ", state.campuses.allCampuses);
        return state.campuses.allCampuses;
    });

    const dispatch = useDispatch();

    const fetchAllCampuses = () => {
        console.log("MESSAGE : RUNNING DISPATCH FROM CAMPUSES fetchAllCampuses");
        return dispatch(fetchAllCampusesThunk());
    };

    useEffect(() => {
        console.log("MESSAGE : FETCH ALL CAMPUSES RUNNING IN USEEFFECT");
        fetchAllCampuses();
    }, []);

    return (
        <div>
            <h1>Campuses Page</h1>
            <div id='campus_contents'>
                <br /> <hr /> <br />
                <CampusItemList data={allCampuses} />
                <br /> <hr /> <br />
                <Link to='/campus_insert'>
                    <button id='newinsertbtn' class='button'>insert new campus</button>
                </Link>
            </div>
            <br /> <br /> <br /> <br /> <br /> <br />
        </div>
    );
};

export default Campuses;