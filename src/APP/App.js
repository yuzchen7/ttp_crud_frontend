import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav } from 'react-bootstrap';

//all pages
import Home from "../pages/Home";
import Students from "../pages/student/Students";
import Campuses from "../pages/campus/Campuses";
import CampusesSingleView from "../pages/campus/CampusSingleView";
import CampusInsert from '../pages/campus/CampusInsert';
import CampusEdit from '../pages/campus/CampusEdit';
import StudentSingleView from '../pages/student/StudentSingleView';
import StudentInsert from '../pages/student/StudentInsert';
import StudentEdit from '../pages/student/StudentEdit';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav id={'navbar'} fill className="justify-content-center" variant="underline">
            <Nav.Item>
              <Nav.Link class='navlink' href='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link class='navlink' href='/students'>Students</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link class='navlink' href='/campuses'>Campuses</Nav.Link>
            </Nav.Item>
        </Nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/campus_single_view" element={<CampusesSingleView />} />
          <Route path="/campus_insert" element={<CampusInsert />} />
          <Route path="/campus_edit" element={<CampusEdit />} />
          <Route path="/student_single_view" element={<StudentSingleView />} />
          <Route path="/student_insert" element={<StudentInsert />} />
          <Route path="/student_edit" element={<StudentEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
