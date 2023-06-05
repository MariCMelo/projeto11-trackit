import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import Habits from "./components/Habits/Habits"
import Daily from "./components/Daily/Daily"
import Registration from "./components/Registration/Registration"
import History from "./components/History/History"
import { useState } from "react"

export default function App() {

  const [token, setToken] = useState('');

  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />} setToken={setToken}/>
        <Route path="/cadastro" element={<Registration />}/>
        <Route path="/habitos" element={<Habits />} token={token}/>
        <Route path="/hoje" element={<Daily />} token={token}/>
        <Route path="/historico" element={<History />} token={token}/>
      </Routes>

    </BrowserRouter>
    
  )
};  
