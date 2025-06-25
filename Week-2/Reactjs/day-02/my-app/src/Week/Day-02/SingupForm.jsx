import React,{useState} from 'react'

const SingupForm = () => {
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

// const [count, setCount] = useState(0);
// console.log("Count number",count++);

  return (
    <div className='signup'>
        <h2>Create your account</h2>
        <form onSubmit={handleSubmit}>   
            <input  type="text" name="name" placeholder="Enter your name"  value={userData.name} onChange={(handleChange)} required/>
              <input  type="email" name="email" placeholder="Enter your email" value={userData.email} onChange={(handleChange)} required/>
                <input  type="password" name="contact"  placeholder="Create password" value={userData.contact} onChange={(handleChange)} required/>
                <input  type="text" name="address" laceholder="Enter address" value={userData.address} onChange={(handleChange)} required/>
                <label>
                  <input type="checkbox" defaultChecked/>
                </label>
                <button type="submit"> sign Up</button>
        </form>
        <div className='user-list'>
          <h3> Registered Users</h3>
          {formData.map((userData, index)=>(
            <div key={index} className='user-card'> 
              <p><strong>Name:</strong>{userData.name}</p>
                 <p><strong>Email:</strong>{userData.email}</p>
            </div>
         ) )}
        </div>
    </div>
  )
}

export default SingupForm