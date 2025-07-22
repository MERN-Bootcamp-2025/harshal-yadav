import { useState , useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {


  const [userData, setUserData] = useState({
    name: "",
    file: null,  
    contact: "",
    address: ""
  });

  // useEffect(()=>{
       
  // },[])

  

  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setUserData(prev => ({
      ...prev,
      [name]: type === "file" ? files[0] : value  // Special handling for files
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(prev => [...prev, userData]);
    setUserData({
      name: "",
      file: null,  // Reset to null
      contact: "",
      address: ""
    });

    axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  };

  return (
    <>
      <div className='bg-green-500 text-amber-50 relative text-3xl p-4 text-center'>
        <h1>Shop</h1>
      </div>
      <div className='relative p-6 flex justify-center'>
        <form onSubmit={handleSubmit} className='w-full max-w-md flex flex-col gap-4'>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={userData.name}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="file"
            onChange={handleChange}
            required
          />
          {/* {userData.file && <div>Selected file: {userData.file.name}</div>} */}
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={userData.contact}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Enter address"
            value={userData.address}
            onChange={handleChange}
            required
          />
          <button type="submit" className='bg-green-700 p-4 rounded-3xl'>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;