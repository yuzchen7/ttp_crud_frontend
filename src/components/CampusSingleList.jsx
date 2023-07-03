import React from "react";
import StudentItemList from "./StudentItemList";

const CampusSingleList = (props) => {
    const singleCampus = props.data[0];
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
            </div>
            <hr />
            <div>
                <h5>Student details</h5>
                <StudentItemList data={singleCampus.students}/>
            </div>
        </div>
    ) : (
        <div>
            <h1> There is error with our Data </h1>
        </div>
    );
};

export default CampusSingleList;