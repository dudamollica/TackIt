import Logo from "../Assets/Logo.png"
// import buttonsLigthBlue from "../Constants/Colors"
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LoginRegister({ inputs, buttonText, linkText, linkpath, submitFunction}) {

    return (
        <>
            <LogoStyle>
                <img src={Logo} />
            </LogoStyle>

            <FormStyle onSubmit={submitFunction}>
                {inputs.map((i) => 
                <input placeholder={i} type={i=="senha"?"password": i=="foto"?"url":i} required></input>)}
                <button type="submit">{buttonText}</button>
            </FormStyle>
            <LinkStyle>
            <Link to={linkpath}>{linkText}</Link>
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
    color: #DBDBDB;
}
button{
    /* background-color: buttonsLigthBlue */
    border-radius:5px;
    width: 303px;
    height: 45px;
}
`
const LinkStyle = styled.div`
width:100%;
display:flex;
justify-content: center;
margin-top:25px;
a{
    color:red;
}
`