import React from "react";
import { Link } from "react-router-dom";

export default function StudentItemList(props) {
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