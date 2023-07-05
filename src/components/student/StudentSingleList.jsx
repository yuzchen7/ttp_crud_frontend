import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampusesThunk } from "../../redux/campuses/campuses.actions"; 
import { fetchEnrollStudentThunk } from "../../redux/students/students.actions";

export default function StudentSingleList(props) {
    const singleStudent = props.data;
    console.log('singleStudent : ', singleStudent);
    const singleCampus = singleStudent.campus;
    console.log('singleCampus : ',singleCampus);

    const allCampuses = useSelector((state) => {
        console.log("state : ", state.campuses.allCampuses);
        return state.campuses.allCampuses;
    });

    const dispatch = useDispatch();

    if (allCampuses.length === 0) {
        dispatch(fetchAllCampusesThunk());
    }

    const transCampus = (e) => {
        e.preventDefault();

        const campusId = document.getElementById('campusEdit').value;

        const newData = {
            id : singleStudent.id,
            campusId : campusId
        };

        dispatch(fetchEnrollStudentThunk(newData));
        var r = window.confirm('Page reload ...');
        if (r === true) {
            window.location.href = '/students';
        }
    };

    return (
        <div id={singleStudent.id} key={`student${singleStudent.id}`} >
          <span width='50px'>
            <img src={singleStudent.imageUrl} alt='not found' width='20px' />
          </span>
          <span>
            <p>
              first Name : {singleStudent.firstName} <br />
              last Name : {singleStudent.lastName} <br />
              email : {singleStudent.email} <br />
            </p>
          </span>
          <hr />
          <span>
            <h5>Cmapus Information</h5>
            <span width='50px'>
                <img src={singleCampus.imageUrl} alt='not found' width='50px' />
            </span>
                <span>
                    <p>
                        Campus Name : {singleCampus.name} <br />
                        Address : {singleCampus.address} <br />
                        Description : {singleCampus.description} <br />
                    </p>
                </span>
            </span>
            <span>
                <h6>Change Cmapus</h6>
                <select id="campusEdit">
                    <option key={`campus_${singleCampus.id}`} value={singleCampus.id}> {singleCampus.name} </option>
                    {
                        allCampuses.map((campus) => {
                            if (campus.name === singleStudent.campus.name) {
                                return <></>
                            }
                            return <option key={`campus_${campus.id}`} value={campus.id}> {campus.name} </option>
                        })
                    }
                </select>
                <br />
                <button onClick={transCampus}> Enroll </button>
            </span>
        </div>
    );
};
