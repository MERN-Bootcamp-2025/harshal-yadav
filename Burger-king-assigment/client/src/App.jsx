import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/Cart';
import { GiShoppingCart } from "react-icons/gi";
// import './App.css'

function App() {


return (
      <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow p-4 flex justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600"> FoodApp</Link>
        <Link to="/cart" className="text-blue-500 hover:underline">
        <div className='flex pr-5' > 
     
             <GiShoppingCart size={30} /> 
              Cart
          </div></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
) 
}

export default App
