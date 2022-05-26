import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Authentication/Login/Login";
import Signup from "./Pages/Authentication/Login/Signup";
import NavBar from "./Pages/Global/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Pages/Dashboard/Profile";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
