import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowAnimals from './ShowAnimals'


function getRandomVariable(){
  const animal= ["cat","dog","cow"];
  return animal[Math.floor(Math.random() * animal.length)];
}


function App() {
  const [count, setCount] = useState([]);
 
  function handleEvent(){

    setCount([...count, getRandomVariable()]);
  }
const renderAnimals= count.map((animal, index)=>{
  return <ShowAnimals type={animal} key={index}/>
})
  return (
    <>
     <button onClick={handleEvent}>Click me!</button>
     <p>{renderAnimals}</p>
    </>
  )
}

export default App
