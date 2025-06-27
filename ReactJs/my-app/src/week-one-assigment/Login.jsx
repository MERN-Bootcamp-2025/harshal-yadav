import React,{useState} from 'react'
// import from './App.css'
// import  from '../';

const Login = () => {
    const [userData, setUserData]= useState({
    name:"",
    email:"",
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
    <div className='signup-form'>
      <h2>Create your account</h2>
      <form onSubmit={handleSubmit}>
        {/* <label>Name </label> */}
        <input type="text" name="name" placeholder="Enter your name"  value={userData.name} onChange={(handleChange)} required/>
        {/* <label>Email </label> */}
        <input type="email" name="email" placeholder="Enter your email" value={userData.email} onChange={(handleChange)} required/>
        {/* <label>Contact Number </label> */}
        <input type="password" name="contact"  placeholder="Create password" value={userData.contact} onChange={(handleChange)} required/>
        <label>Address</label>
        <input type="text" name="address" laceholder="Enter address" value={userData.address} onChange={(handleChange)} required/>
         <label>
                  <input type="checkbox" defaultChecked/>
                </label>
        <button type="submit" className="btn"> Sign Up</button>
        <span> or continue with</span>
        <div className="social-buttons">
         <div >
           <img src="data:image/png;base64,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" style={{width:'6rem', borderRadius:'5px'}}/>
         </div>
         <div>
           <img src="data:image/png;base64,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" style={{width:'6rem', height:'3.2rem',borderRadius:'5px'}}/>
         </div>
        </div>

      </form>

          <h3> Registered Users</h3>
        <div className='user-list'>
          {formData.map((userData, index)=>(
            <div key={index} className='user-card'> 
              <p><strong>Name:</strong>{userData.name}</p>
                 <p><strong>Email:</strong>{userData.email}</p>
                  <p><strong>Address:</strong>{userData.address}</p>
            </div>
         ) )}
        </div>
    </div>
  )
}

export default Login;