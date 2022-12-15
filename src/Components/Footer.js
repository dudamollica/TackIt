import styled from "styled-components"
import { buttonsLigthBlue} from "../Constants/Colors"
import { Link } from "react-router-dom"

export default function Footer(){
return(
    <FooterSyle>
     <Link to="/habitos">Hábitos</Link>
     <Link to="/hoje"><TodayStyle>Hoje</TodayStyle></Link>
     <Link to="/historico">Histórico</Link>

    </FooterSyle>
)

}

const FooterSyle= styled.div`
position: fixed;
left:0px;
bottom: 0px;
height:70px;
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 30px;
box-sizing: border-box;
z-index:1;
background-color: white;
a{
color: ${buttonsLigthBlue};
text-decoration: none;
font-size: 18px;
}
`
const TodayStyle = styled.div`
width: 91px;
height: 91px;
background-color: ${buttonsLigthBlue};
margin-bottom: 50px;
border-radius:50%;
display:flex;
align-items: center;
justify-content: center;
color: #FFFFFF;
font-size:18px;
`