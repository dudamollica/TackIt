import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { backgroundGray, darkBlue } from "../Constants/Colors";

export default function Today({ token }) {
    const [habitsList, setHabitsList] = useState([])

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(URL, config)
        promise.then((res) => {
            console.log(res.data)
            setHabitsList(res.data)
        })
    promise.catch((err) => console.log(err.data))
    }, [])

    function wichDay() {
        switch (dayjs().day()) {
            case 0:
                return "Domingo"
            case 1:
                return "Segunda"
            case 2:
                return "Terça"
            case 3:
                return "Quarta"
            case 4:
                return "Quinta"
            case 5:
                return "Sexta"
            case 6:
                return "Sábado"
            default:
                break;
        }
    }

    return (
        <>
            <NavBar />
            <TodayContainer>
                <DayStyle>{wichDay()}, {dayjs().date()}/{dayjs().month()} <br />
                    {habitsList.length == 0 && <p> Nenhum hábito concluído ainda</p>}
                </DayStyle>
            </TodayContainer>
            <Footer />
        </>
    )

}

const DayStyle = styled.div`
font-size:23px;
color: ${darkBlue};
p{
    color: #BABABA;
    font-size:18px;
    margin-top: 5px;
}
`

const TodayContainer = styled.div`
background-color: ${backgroundGray};
height: 527px;
padding-top: 30px;
padding-left:15px;
box-sizing: border-box;
`