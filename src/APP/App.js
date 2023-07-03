import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//3 mian pages
import Home from "../pages/Home";
import Students from "../pages/Students";
import Campuses from "../pages/Campuses";
import CampusesSingleView from "../pages/CampusSingleView";

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
          <Route path="/campuses_single_view" element={<CampusesSingleView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
