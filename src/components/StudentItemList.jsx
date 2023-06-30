import React from "react";

export default function StudentItemList(props) {
  return props.data ? (
    props.data.map((student) => {
      return (
        <div id={student.id} key={`student${student.id}`} >
          <hr />
          first Name : {student.firstName} <br />
          last Name : {student.lastName} <br />
          email : {student.email} <br />
          <img src={student.imageUrl} width='20px' />
        </div>
      );
    })
  ) : (
    <h1>Loading...</h1>
  );
}