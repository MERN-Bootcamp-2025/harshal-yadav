import React from 'react'
import { useLocation } from "react-router-dom";

const UserPage = () => {
      const location = useLocation();
  const formData = location.state;
  console.log("formDataformData",formData.name)
  return (
      <div>
      <h1>Dashboard</h1>

          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Contact: {formData.contact}</p>
          <p>Address: {formData.address}</p>
          <hr />

    </div>
  )
}

export default UserPage;