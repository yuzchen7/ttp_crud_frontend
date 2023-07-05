import React from "react";
import { useLocation } from "react-router-dom";
import StudentSingleList from "../../components/student/StudentSingleList";

const StudentSingleView = () => {
    const singleStudent = useLocation().state;
    console.log(singleStudent);

    return (
        <div>
            <h1>Single Student View</h1>
            <StudentSingleList data={singleStudent} />
        </div>
    );
};

export default StudentSingleView;