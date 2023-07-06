import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDeleteStduentThunk } from "../../redux/students/students.actions";

import { Card, Row, Col } from "react-bootstrap";

export default function StudentItemList(props) {
  const dispatch = useDispatch();

  const deleteStudent = (studentId) => {
    console.log(studentId);
    dispatch(fetchDeleteStduentThunk(studentId));

    var r = window.confirm('reload page...');
    if (r === true) {
      window.location.reload();
    }
  };

  return props.data.length !== 0 && props.data ? (
    <Row xs={1} md={5} className="g-4">
    {
      props.data.map((student) => {
        return (
          <Col>
            <Card id={student.id} key={`student${student.id}`} >
              <Card.Img src={student.imageUrl} alt="not found" />
              <Card.Body>
                <Card.Text id='student_info'>
                  First Name : {student.firstName} <br />
                  Last Name : {student.lastName} <br />
                  Email : {student.email} <br />
                  Campus : {student.campus.name}
                </Card.Text>
              </Card.Body>
              <div>
                <Link to='/student_edit' state={student} >
                  <button id='students_editbtn' class='button'>Edit</button>
                </Link>
                <Link to='/student_single_view' state={student} >
                  <button id='students_singlebtn' class='button' >Single View</button>
                </Link>
                <button id='students_deleteBtn' class='button' onClick={(e) => {e.preventDefault(); deleteStudent(student.id)}}>Delete</button>
              </div>
              <br />
            </Card>
          </Col>
        );
      })
    }
    </Row>
  ) : (
    <div>
      <h1> There is not Student Data fount </h1>
      <h1> or loading.... </h1>
    </div>
  );
}