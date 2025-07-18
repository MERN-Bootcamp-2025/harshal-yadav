import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [userData, setUserData]= useState({
    name:"",
    file:"",
    contact:"",
    address:""

  })

  const [formData, setFormData]= useState([]);

 const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setUserData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};


const handleSubmit = (e) => {
  e.preventDefault();
  setFormData((prev) => [...prev, userData]);
  setUserData({ name: "", email: "", contact: "", address: "" });
};


  return (
    <>
    <div className='bg-green-500 text-amber-50 relative text-3xl p-4 text-center'>
      <h1>Shop</h1>
    </div>
    <div className='ralative bg-bla flex'>
           <form onSubmit={handleSubmit}>   
            <input  type="text" name="name" placeholder="Enter your name"  value={userData.name} onChange={(handleChange)} required/>
              <input  type="file" name="email" value={userData.file} onChange={(handleChange)} required/>
                <input  type="text" name="contact"  placeholder="Contact " value={userData.contact} onChange={(handleChange)} required/>
                <input  type="text" name="address" laceholder="Enter address" value={userData.address} onChange={(handleChange)} required/>
            
                <button type="submit" className='bg-green-700 p-4 rounded-3xl'> Submit</button>
        </form>
    
    </div>
    </>
  )
}

export default App
