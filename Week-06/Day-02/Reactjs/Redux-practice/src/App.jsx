import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  const [carDetails, setCarDetails] = useState({
   name:'',
   value:0,
  });
const handleName=(event)=>{
  console.log("fjffjf",event.target.value)
setCarDetails( [carDetails.name:event.target.value]);
}

console.log("Hello",carDetails.name);
  return (
    <>
    <div>
      <form>
        <input name='Car Name' placeholder='Car Name' value={carDetails.name} onChange={handleName} />
         <input name='Car Value' placeholder='Car Value' />
         <ButtonComponent />
         
      </form>
    </div>
   
    </>
  )
}

export default App
