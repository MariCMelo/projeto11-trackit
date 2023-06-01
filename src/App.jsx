import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import Habits from "./components/Habits/Habits"
import Daily from "./components/Daily/Daily"
import Registration from "./components/Registration/Registration"
import History from "./components/History/History"


export default function App() {
  return (
   
<BrowserRouter>

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/cadastro" element={<Registration />}/>
  <Route path="/habitos" element={<Habits />}/>
  <Route path="/hoje" element={<Daily />}/>
  <Route path="/historico" element={<History />}/>
</Routes>

</BrowserRouter>
    
  )
}

