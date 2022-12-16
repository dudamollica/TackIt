import styled from "styled-components"
import {darkBlue} from "../Constants/Colors"
import TrackIt from "../Assets/TrackIt.png"
import { AuthContext } from "../AppContext/auth";
import { useContext } from "react";

export default function NavBar(){
    const {userImg}= useContext(AuthContext)

    return(
        <NavBarStyle>
           <div> <img src={TrackIt} alt="Logo TrackIt"/> </div>
            <UserImg src={userImg}/>
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