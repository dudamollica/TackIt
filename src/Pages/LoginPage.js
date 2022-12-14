import styled from "styled-components";
import axios from "axios";
import LoginRegister from "../Components/LoginRegister";

export default function Login() {
    return (
        <>
            <LoginRegister
            inputs={["email","senha"]} 
            buttonText="Entrar"
            linkText="Não tem uma conta? Cadastre-se!"
            linkpath="/cadastro"
            submitFunction
            />
        </>
    )
}

