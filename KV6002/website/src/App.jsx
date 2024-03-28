import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signin from './Signin'
import SignUp from './SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
      <Menu />
        <Routes>
            <Route path="/SignUp" element={<SignUp />} /> 
            <Route path="/SignIn" element={<Signin />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
