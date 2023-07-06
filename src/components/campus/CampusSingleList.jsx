import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDeleteCampusThunk } from "../../redux/campuses/campuses.actions";
import StudentItemList from "../student/StudentItemList";

import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";


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
            <Card id='singleCampus'>
                <Card.Img src={singleCampus.imageUrl} alt="not found" ></Card.Img>
                <Card.Body>
                    <Card.Title>{singleCampus.name}</Card.Title>
                    <Card.Text> {singleCampus.address} </Card.Text>
                    <hr />
                    <Card.Text>
                        {singleCampus.description}
                    </Card.Text>
                    <hr />
                </Card.Body>
                <div>
                    <Link to='/campus_edit' state={singleCampus}>
                        <button id='campus_single_editbtn' class='button'>Edit</button>
                    </Link>
                    <button id='campus_single_deleteBtn' class='button' onClick={deleteCampus} value={singleCampus.id} >Delete</button>
                </div>
                <br />
            </Card>
            <br /> <hr /> <hr /> <br />
            <div>
                <h4>Student details</h4>
                <h5>total student: {singleCampus.students.length}</h5>
                <br />
                <Row xs={2} md={4} className="g-4">
                    {
                        singleCampus.students.map((student) => {
                            return (
                                <Col>
                                    <Card id={student.id} key={`campus${student.id}`}>
                                        <Card.Img src={student.imageUrl} alt="not found" />
                                        <hr />
                                        <Card.Body>
                                            <Card.Text>
                                                First Name : {student.firstName} <br/>
                                                Last Name : {student.lastName} <br/>
                                                Email : {student.email} <br/>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
            </div>
            <br />
            <Link to='/student_insert'>
                <button id='singleview_insert_stu' class='button' >insert new student</button>
            </Link>
            {/* <div id={singleCampus.id} key={`campus${singleCampus.id}`} >
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
            </div> */}
            {/* <hr />
            <div>
                <h5>Student details</h5>
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
            </div> */}
        </div>
    ) : (
        <div>
            <h1> There is error with our Data </h1>
        </div>
    );
};

export default CampusSingleList;