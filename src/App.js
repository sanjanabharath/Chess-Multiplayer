import './App.css';
import Home from './components/Home'
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='background-image'>
      <Home/>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}>
          <Route path="/signup" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
