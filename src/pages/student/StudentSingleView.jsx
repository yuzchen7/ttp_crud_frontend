import React from "react";
import { useLocation } from "react-router-dom";
import StudentSingleList from "../../components/student/StudentSingleList";

import "./css/StudentSingle.css";

const StudentSingleView = () => {
    const singleStudent = useLocation().state;
    console.log(singleStudent);

    return (
        <div id='student_single_contents'>
            <h1>Single Student View</h1>
            <br />
            <StudentSingleList data={singleStudent} />
            <br />
            <div>
                <input type="button" class='button' id='back' value='← Back' onClick={() => {window.history.back()}}/>
            </div>
            <br /> <br /> <br /> <br /> <br /> <br />
        </div>
    );
};

export default StudentSingleView;