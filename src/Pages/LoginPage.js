import styled from "styled-components";
import axios from "axios";
import { buttonsLigthBlue } from "../Constants/Colors"
import { useState, createContext, useContext} from "react";
import Logo from "../Assets/Logo.png"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AppContext/auth";

export default function Login({ setToken }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const {saveToken, saveImg}= useContext(AuthContext)

    function loginApp(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const body = { email, password }
        const promise = axios.post(URL, body)
        promise.then((res) => {
            saveToken(res.data.token)
            saveImg(res.data.image)
            navigate("/hoje")
        })
        promise.catch((err) => alert("Usuário não cadastrado"))
    }

    return (
        <LoginContainer>
            <LogoStyle>
                <img src={Logo} />
            </LogoStyle>

            <FormStyle onSubmit={loginApp}>
                <input placeholder="email" type="email" required
                    value={email} onChange={(e) => setEmail(e.target.value)} >
                </input>

                <input placeholder="senha" type="password" required
                    value={password} onChange={(e) => setPassword(e.target.value)} >
                </input>
                <button type="submit">Entrar</button>
            </FormStyle>
            <LinkStyle>
                <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
            </LinkStyle>
        </LoginContainer>
    )
}


const LoginContainer = styled.div`
    height: 100vh;
    background-color: white;
`

const LogoStyle = styled.div`
width:100%;
display:flex;
align-items: center;
justify-content: center;
padding-top:68px;

`
const FormStyle = styled.form`
width:100%;
display: flex;
flex-direction: column;
align-items: center;
input{
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    font-size:20px;
    padding-left:7px;
}
input::placeholder{
    color:#DBDBDB;
}
button{
    background-color: ${buttonsLigthBlue};
    border-color: ${buttonsLigthBlue};
    border-radius:5px;
    width: 303px;
    height: 45px;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
}
`
const LinkStyle = styled.div`
width:100%;
display:flex;
justify-content: center;
margin-top:25px;
a{
    color:${buttonsLigthBlue};
}
`