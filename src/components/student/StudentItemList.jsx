import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDeleteStduentThunk } from "../../redux/students/students.actions";

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
    props.data.map((student) => {
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
              Campus : {student.campus.name}
            </p>
          </span>
          <Link to='/student_single_view' state={student} >
            <button>Single View</button>
          </Link>
          <Link to='/student_edit' state={student} >
            <button>Edit</button>
          </Link>
          <button id='deleteBtn' onClick={(e) => {e.preventDefault(); deleteStudent(student.id)}}>Delete</button>
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
}