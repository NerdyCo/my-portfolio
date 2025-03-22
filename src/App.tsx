import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={null} />
          <Route path="/projects" element={null} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={null} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
