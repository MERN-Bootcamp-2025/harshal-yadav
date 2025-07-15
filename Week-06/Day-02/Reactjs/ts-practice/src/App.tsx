import { useState } from 'react'
import './App.css'

interface User{
  name : string;
  id: number;
}

function App() {
  let hello: string ="hello with TS!";

   const user:User={
    name:'Harshal yadav',
    id: 0
   }

  return (
    <>
      <h2>{hello}</h2>
       <h2>{user.id}</h2>
    </>
  )
}

export default App
