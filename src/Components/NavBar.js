import styled from "styled-components"
import {darkBlue} from "../Constants/Colors"
import TrackIt from "../Assets/TrackIt.png"

export default function NavBar(){
    return(
        <NavBarStyle>
           <div> <img src={TrackIt} alt="Logo TrackIt"/> </div>
            <UserImg src="https://almeidajunior-prod1.s3.amazonaws.com/prod/uploads/news/5d81505ac6770.jpg"/>
        </NavBarStyle>
    )
}

const NavBarStyle = styled.div`
height: 70px;
width: 100%;
background-color: ${darkBlue};
display:flex;
justify-content: space-between;
align-items: center;
padding-left: 11px;
padding-right: 11px;
box-sizing: border-box;
div{
    background-color:${darkBlue} ;
}
img{
    background-color: ${darkBlue};
}
`
const UserImg = styled.img`
width: 51px;
height: 51px;
border-radius: 98.5px;
`