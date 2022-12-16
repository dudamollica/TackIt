import NavBar from "../Components/NavBar"
import styled from "styled-components"
import { darkBlue, buttonsLigthBlue, backgroundGray } from "../Constants/Colors"
import Footer from "../Components/Footer"
import { useEffect, useState } from "react"
import WeekDay from "../Components/WeekDay"
import axios from "axios"
import AllHabits from "../Components/AllHabits"

export default function Habits({ token }) {
    const [openAddHabit, setOpenAddHabit] = useState(false)
    const weekDay = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [daysChoose, setDaysChoose] = useState([])
    const [habitName, setHabitName] = useState("")
    const [habitsList, setHabitsList] = useState([])

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(URL, config)
        promise.then((res) => setHabitsList(res.data))
    }, [])

    function openedAddHabit() {
        setOpenAddHabit(true)
    }

    function cancelAddHabit() {
        setOpenAddHabit(false)
        setDaysChoose([])
    }

    function saveHabit(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const body = { name: habitName, days: daysChoose }
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
        const promise = axios.post(URL, body, config)
        promise.then((res) => {
            setHabitsList([...habitsList, res.data])
            setOpenAddHabit(false)
        })
        setHabitName("")
        setDaysChoose([])
    }

    return (
        <>
            <NavBar />
            <HabistContainer habitsList={habitsList}>
                <NewHabit>Meus hábitos
                    <button onClick={openedAddHabit}>+</button>
                </NewHabit>
                {openAddHabit && <AddHabitStyle>

                    <FormStyle onSubmit={saveHabit}>
                        <input placeholder="nome do hábito" value={habitName} onChange={(e) => setHabitName(e.target.value)}></input>
                        <WeekDayContainer >
                            {weekDay.map((d, index) => <WeekDay key={index} id={index} daysChoose={daysChoose} setDaysChoose={setDaysChoose} name={d} />)}
                        </WeekDayContainer>
                        <ContainerButtons>
                            <CancelButton onClick={cancelAddHabit}>Cancelar</CancelButton>
                            <SaveButton type="submit">Salvar</SaveButton>
                        </ContainerButtons>
                    </FormStyle>

                </AddHabitStyle>}
                {habitsList.length == 0 ? <NoHabistMsg>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </NoHabistMsg> : habitsList.map((h) => <AllHabits key={h.id} habitsList={habitsList} setHabitsList={setHabitsList} token={token} id={h.id} weekDay={weekDay} name={h.name} days={h.days} />)}
            </HabistContainer>

            <Footer />
        </>
    )
}

const WeekDayContainer = styled.div`
display:flex;
margin-left: 10px;
margin-bottom: 25px;
gap: 3px;
width:100%;
`

const FormStyle = styled.form`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
margin-bottom: 30px;
input{
width: 303px;
height: 40px;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-bottom: 10px;
font-size: 20px;
margin-left:10px;
padding-left: 5px;
color: #666666;
}
input::placeholder{
    color: #DBDBDB;
}
`

const ContainerButtons = styled.div`
display:flex;
align-items: flex-end;
justify-content: flex-end;
box-sizing: border-box;
padding-bottom: 20px;
padding-right: 30px;
button{
    display:flex;
    align-items: center;
    justify-content: center;
}
`

const CancelButton = styled.button`
background-color: white;
border:none;
color: ${buttonsLigthBlue};
font-size:16px;
width: 69px;
height: 20px;
margin-bottom: 7px;
`

const SaveButton = styled.button`
border-radius: 5px;
border-color: ${buttonsLigthBlue};
width: 84px;
height: 35px;
background-color: ${buttonsLigthBlue};
font-size:16px;
color: white;
margin-left: 20px;
`

const AddHabitStyle = styled.div`
width:100%;
display:flex;
align-items: center;
justify-content: center;
margin-bottom: 30px;
`

const HabistContainer = styled.div`
background-color: ${backgroundGray};
padding-bottom: 100px;
`
const NewHabit = styled.div`
display:flex;
color: ${darkBlue};
font-size:23px;
width:100%;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
padding: 20px 20px;
button{
    width: 40px;
    height: 35px;
    background-color: ${buttonsLigthBlue};
    border-color: ${buttonsLigthBlue};
    border-radius: 4.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size:27px;
    padding-bottom: 4px;
}
`
const NoHabistMsg = styled.div`
color: #666666;
font-size: 18px;
padding: 5px 20px;
`