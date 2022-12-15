import styled from "styled-components";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { backgroundGray } from "../Constants/Colors";

export default function Today(){

    return(
        <>
        <NavBar/>
        <TodayContainer>


        </TodayContainer>
        <Footer/>
        </>
    )

}

const TodayContainer = styled.div`
background-color: ${backgroundGray};
height: 527px;
`