import styled from "styled-components";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { backgroundGray } from "../Constants/Colors";

export default function Historic(){

    return(
        <>
        <NavBar/>
        <HistoricContainer>

            
        </HistoricContainer>
        <Footer/>
        </>
    )

}

const HistoricContainer = styled.div`
background-color: ${backgroundGray};
height: 527px;
`