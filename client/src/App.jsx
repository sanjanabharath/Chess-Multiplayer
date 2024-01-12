import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Appbar from "./components/Appbar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import "./App.css";

function App() {
  return (
    <div
      className="main"
      style={{
        backgroundColor: "#1e0344",
        height: "100vh",
      }}
    >
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
