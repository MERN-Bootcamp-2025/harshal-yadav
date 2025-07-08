import React from 'react'
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";


// const NavBarComponent = ({setSearch, search}) => {
      
//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow p-4 flex justify-between items-center">
//         <Link to="/" className="text-xl font-bold text-blue-600"> <div className='flex gap-5  w-15 '><img src="/logo.png" alt="logo" class="w-32 h-auto rounded-full" /><div className='realtive pt-3'> FoodApp</div></div></Link>
//             <div className="flex gap-2 mb-2">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="border  p-2 rounded w-full"
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//         />
        
//         {/* <button onClick={handleMeals} className="bg-gray-500 text-white px-3 py-1 rounded">Meals</button> */}
//       </div>
//         <Link to="/cart" className="text-blue-500 hover:underline">
//         <div className='flex pr-5' > 
     
//              <GiShoppingCart size={30} /> 
//               Cart
//           </div></Link>
//       </nav>
//   )
// }

const NavBarComponent = ({ setSearch, search, cartCount = 0 }) => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold text-blue-600">
        <div className="flex gap-5 w-15">
          <img src="/logo.png" alt="logo" className="w-32 h-auto rounded-full" />
          <div className="relative pt-3">FoodApp</div>
        </div>
      </Link>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-full"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <Link to="/cart" className="text-blue-500 hover:underline relative pr-5">
        <div className="flex items-center gap-1">
          <GiShoppingCart size={30} />
          Cart
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
              {cartCount}
            </span>
          )}
        </div>
      </Link>
    </nav>
  );
};


export default NavBarComponent;