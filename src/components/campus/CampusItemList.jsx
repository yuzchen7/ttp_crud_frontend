import React from "react";
import { Link } from "react-router-dom";

export default function CampusItemList(props) {
    return props.data && props.data.length !== 0 ? (
        props.data.map((campus) => {
            return (
                <div id={campus.id} key={`campus${campus.id}`} >
                    <span width='50px'>
                        <Link to='/campuses_single_view' state={campus.id} > 
                            <img src={campus.imageUrl} width='50px' />
                        </Link>
                    </span>
                    <span>
                        <p>
                            Campus Name : {campus.name} <br />
                            Address : {campus.address} <br />
                            Description : {campus.description} <br />
                            Number of Students : {campus.studentsNum} <br />
                        </p>
                    </span>
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
};
