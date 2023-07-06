import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { fetchSingleCampusThunk } from "../../redux/campuses/campuses.actions";
import { Link } from "react-router-dom";
import CampusSingleList from "../../components/campus/CampusSingleList";

import "./css/CampusSingle.css"

const CampusesSingleView = () => {
    const location = useLocation();
    const campus_id = location.state;

    const campus_detail = useSelector((state) => {
        console.log("CampusesSingleView state : ", state.campuses.singleCampus);
        return state.campuses.singleCampus;
    });

    const dispatch = useDispatch();

    const fetchSingleCampus = () => {
        console.log("MESSAGE : RUNNING DISPATCH FROM CampusSingleView fetchSingleCampus");
        return dispatch(fetchSingleCampusThunk(campus_id));
    };

    useEffect(() => {
        console.log("MESSAGE : FETCH SINGLE CAMPUSES RUNNING IN USEEFFECT");
        fetchSingleCampus();
    }, []);

    return (
        <div>
            <h1>Single Campus View</h1>
            <div id='single_campus_contents'>
                <hr />
                <CampusSingleList data={campus_detail}/>
                <hr />
                <br />
                <div>
                    <input type="button" class='button' id='singleview_campus_back' value='← Back' onClick={() => {window.history.back()}}/>
                </div>
                <br /> <br /> <br /> <br /> <br /> <br />
            </div>
        </div>
    );

};

export default CampusesSingleView;