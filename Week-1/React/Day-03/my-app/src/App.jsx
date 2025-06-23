import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {  BrowserRouter as Router, Routes, Route } from "react-router"
import Layout from './layout/MainLayout'


function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
