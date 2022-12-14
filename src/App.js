import{BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./Pages/LoginPage.js";
import Register from "./Pages/RegisterPage.js"
import Habits from "./Pages/HabitsPage.js"
import Today from "./Pages/TodayPage"
import Historic from "./Pages/HistoricPage.js";
import GlobalStyle from "./GlobalStyle"

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/habitos" element={<Habits />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/historico" element={<Historic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
