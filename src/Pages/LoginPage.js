import styled from "styled-components";
import axios from "axios";
import LoginRegister from "../Components/LoginRegister";
import {buttonsLigthBlue} from "../Constants/Colors"
import { useState } from "react";
import Logo from "../Assets/Logo.png"
import { Link } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <LogoStyle>
                <img src={Logo} />
            </LogoStyle>


            <FormStyle>
                {/* onSubmit={submitFunction} */}

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
        </>
    )
}


const LogoStyle = styled.div`
width:100%;
display:flex;
align-items: center;
justify-content: center;
margin-top:68px;
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