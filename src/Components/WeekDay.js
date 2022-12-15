import { useState } from "react"
import styled from "styled-components"


export default function WeekDay({ id, name, daysChoose, setDaysChoose }) {
    const [dayChoose, setDayChoose] = useState(false)

    function chooseThisDay(e,id) {
        e.preventDefault()
        if (!dayChoose) {
            setDayChoose(true)
            const daysList=[...daysChoose, id]
            setDaysChoose(daysList)
        } else {
            setDayChoose(false)
            const daysList= daysChoose.filter((d)=>d!=id)
            setDaysChoose(daysList)
        }
    }

    return (
        <ButtonStyle onClick={(e)=>chooseThisDay(e,id)} dayChoose={dayChoose}>{name}</ButtonStyle>
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