import React from "react";

export default function StudentItemList(props) {
  return props.data ? (
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
            </p>
          </span>
        </div>
      );
    })
  ) : (
    <h1>Loading...</h1>
  );
}