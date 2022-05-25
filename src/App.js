import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Global/Footer/Footer";
import NavBar from "./Pages/Global/NavBar/NavBar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
