import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/LoginPage.js";
import Register from "./Pages/RegisterPage.js"
import Habits from "./Pages/HabitsPage.js"
import Today from "./Pages/TodayPage"
import Historic from "./Pages/HistoricPage.js";
import GlobalStyle from "./GlobalStyle"
import { useState } from "react";
import styled from "styled-components";
import { backgroundGray } from "./Constants/Colors.js";

function App() {
  const [token, setToken] = useState("")
  //imagem do user

  return (
    <AppStyle>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login setToken={setToken} />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/habitos" element={<Habits token={token} />} />
          <Route path="/hoje" element={<Today token={token} />} />
          <Route path="/historico" element={<Historic />} />
        </Routes>
      </BrowserRouter>
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
height: 100vh;
background-color: ${backgroundGray};
`
