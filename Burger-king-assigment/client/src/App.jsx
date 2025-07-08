import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/Cart';
import { GiShoppingCart } from "react-icons/gi";
import NavBarComponent from './components/NavBarComponent';
// import './App.css'

function App() {


return (
      <div className="min-h-screen bg-gray-100">

        
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
) 
}

export default App
