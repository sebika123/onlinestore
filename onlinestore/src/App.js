import './App.css';
import Navbar from "./components/Navbar"
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
