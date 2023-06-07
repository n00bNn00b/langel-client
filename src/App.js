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
import Checkout from "./Pages/Order/Checkout";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Dashboard/RequireAdmin";
import NotFound from "./Pages/NotFound";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {!user && <Route path="/login" element={<Login />} />}
        <Route path="/products" element={<AllProducts />} />
        {!user && <Route path="/signup" element={<Signup />} />}
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/order"
          element={
            <RequireAuth>
              <Order />
            </RequireAuth>
          }
        />
        <Route
          path="/order/:id"
          element={
            <RequireAuth>
              <Order />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout/:id"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="/updateProfile"
          element={
            <RequireAuth>
              <UpdateProfile />
            </RequireAuth>
          }
        />
        <Route
          path="/myorders"
          element={
            <RequireAuth>
              <MyOrders />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        {/* <Route
          path="/users"
          element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          }
        /> */}
        <Route
          path="/users"
          element={
            <RequireAuth>
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
