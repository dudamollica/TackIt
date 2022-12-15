import { useState } from "react"
import styled from "styled-components"


export default function WeekDay({ name }) {
    const [dayChoose, setDayChoose] = useState(false)

    function chooseThisDay(e) {
        e.preventDefault()
        if (!dayChoose) {
            setDayChoose(true)
        } else {
            setDayChoose(false)
        }
    }

    return (
        <ButtonStyle onClick={chooseThisDay} dayChoose={dayChoose}>{name}</ButtonStyle>
    )

}

const ButtonStyle = styled.button`
border: 1px solid #D5D5D5;
border-radius: 5px;
width: 35px;
height: 35px;
color:${props=>props.dayChoose?"white":"#DBDBDB"};
background-color:${props=>props.dayChoose?"#DBDBDB":"white"};
`