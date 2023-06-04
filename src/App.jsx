import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Habits from "./components/Habits/Habits";
import Daily from "./components/Daily/Daily";
import Registration from "./components/Registration/Registration";
import History from "./components/History/History";
import { useState } from "react";
import { UserContext } from "./components/contexts/UserContext";
import { ProgressContext } from "./components/contexts/ProgressContext";

export default function App() {
  const [user, setUser] = useState({});
  const [progress, setProgress] = useState(10);

  return (
    <BrowserRouter>
      <ProgressContext.Provider value={{ progress, setProgress }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cadastro" element={<Registration />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/hoje" element={<Daily />} />
            <Route path="/historico" element={<History />} />
          </Routes>
        </UserContext.Provider>
      </ProgressContext.Provider>
    </BrowserRouter>
  );
}