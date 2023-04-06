import Red from "./Red";
import Blue from "./Blue";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Main = (props) => {
  return (
    <BrowserRouter>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="/blue">Go to Blue</Link>
          <Link to="/red">Go to Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/" element={<Red />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Main;
