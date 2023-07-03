import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.actions"; 
import CampusItemList from "../components/CampusItemList";

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
        <>
        <center>
            <div>
                <h1>Campuses Page</h1>
            </div>
        </center>
        <CampusItemList data={allCampuses} />
        </>
    );
};

export default Campuses;