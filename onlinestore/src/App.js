import './App.css';
import Navbar from "./components/Navbar"
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;