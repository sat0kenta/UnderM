import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import SignUp from "./component/pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> {/* 修正したパス */}
      </Routes>
    </Router>
  );
}

export default App;
