import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Appbar from "./components/Appbar";
import "./App.css";

function App() {
  return (
    <div
      className="main"
      style={{
        backgroundColor: "#151514",
        height: "100vh",
      }}
    >
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
