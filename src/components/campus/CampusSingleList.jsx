import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDeleteCampusThunk } from "../../redux/campuses/campuses.actions";
import StudentItemList from "../student/StudentItemList";

const CampusSingleList = (props) => {
    const singleCampus = props.data[0];

    const dispatch = useDispatch();

    const deleteCampus = async (e) => {
        e.preventDefault();
        const campus_id = document.getElementById('deleteBtn').value;
        dispatch(fetchDeleteCampusThunk(campus_id));
        var r = window.confirm('reload the page');
        if (r === true) {
            window.location.reload();
        }
    }

    return singleCampus ? (
        <div>
            <div id={singleCampus.id} key={`campus${singleCampus.id}`} >
                <h5>Campus Details</h5>
                <span width='50px'>
                    <img src={singleCampus.imageUrl} width='50px' />
                </span>
                <span>
                    <p>
                        Campus Name : {singleCampus.name} <br />
                        Address : {singleCampus.address} <br />
                        Description : {singleCampus.description} <br />
                    </p>
                </span>
                <Link to='/campus_edit' state={singleCampus}>
                    <button>Edit</button>
                </Link>
                <button id='deleteBtn' onClick={deleteCampus} value={singleCampus.id} >Delete</button>
            </div>
            <hr />
            <div>
                <h5>Student details</h5>
                {/* <StudentItemList data={singleCampus.students}/> */}
                {
                    singleCampus.students.map((student) => {
                        return ( 
                            <div id={student.id} key={`student${student.id}`} >
                                <span width='50px'>
                                    <img src={student.imageUrl} width='20px' />
                                </span>
                                <span>
                                    <p>
                                    first Name : {student.firstName} <br />
                                    last Name : {student.lastName} <br />
                                    email : {student.email} <br />
                                    </p>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    ) : (
        <div>
            <h1> There is error with our Data </h1>
        </div>
    );
};

export default CampusSingleList;