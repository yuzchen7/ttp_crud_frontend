import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//3 mian pages
import Home from "../pages/Home";
import Students from "../pages/student/Students";
import Campuses from "../pages/campus/Campuses";
import CampusesSingleView from "../pages/campus/CampusSingleView";
import CampusInsert from '../pages/campus/CampusInsert';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <center>
            <Link to="/">Home</Link>
            <br />
            <Link to="/students">Students</Link>
            <br />
            <Link to="/campuses">Campuses</Link>
          </center>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/campus_single_view" element={<CampusesSingleView />} />
          <Route path="/campus_insert" element={<CampusInsert />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
