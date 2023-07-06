import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDeleteCampusThunk } from "../../redux/campuses/campuses.actions";

import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        <Row xs={1} md={4} className="g-4">
        {
            props.data.map((campus) => {
                return (
                    <Col>
                        <Card id={campus.id} key={`campus${campus.id}`} >
                            <Card.Img src={campus.imageUrl} alt="not found" ></Card.Img>
                            <Card.Body>
                                <Card.Title class='campusTitle'>{campus.name}</Card.Title>
                                <Card.Text id='campusAddress'>
                                    {campus.address}
                                </Card.Text>
                                <hr />
                                <Card.Text id='campusDescription'>
                                    {campus.description} 
                                </Card.Text>
                                <hr />
                                <Card.Text id='campusStudentNum'>
                                    Number of Students : {campus.studentsNum}
                                </Card.Text>
                                <hr />
                                <div>
                                    <Link to='/campus_edit' state={campus}>
                                        <button id='campus_page_editbtn'class='button'>Edit</button>
                                    </Link>
                                    <Link to='/campus_single_view' state={campus.id} >
                                        <button id='campus_page_singlebtn' class='button'>Single View</button>
                                    </Link>
                                    <button class='button' id='campus_page_deleteBtn' onClick={(e) => {e.preventDefault(); deleteCampus(campus.id)}}>Delete</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })
        }
        </Row>
    ) : (
        <div>
            <h1> There is not Campus Data fount </h1>
            <h1> or loading.... </h1>
            <br />
        </div>
    );
};
