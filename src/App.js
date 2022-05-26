import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Authentication/Login/Login";
import Signup from "./Pages/Authentication/Login/Signup";
import NavBar from "./Pages/Global/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Pages/Dashboard/Profile";
import UpdateProfile from "./Pages/Dashboard/UpdateProfile";
import AllProducts from "./Pages/Products/AllProducts";
import Order from "./Pages/Order/Order";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order" element={<Order />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
