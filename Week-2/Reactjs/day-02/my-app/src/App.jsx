import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Week/Day-02/Dashboard'
import SingupForm from './Week/Day-02/SingupForm'

 
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='continer'> 
     <Dashboard/>
     <SingupForm/>
    </div>
    
    </>
  )
}

export default App
