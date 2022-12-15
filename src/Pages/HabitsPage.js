import NavBar from "../Components/NavBar"
import styled from "styled-components"
import { darkBlue, buttonsLigthBlue, backgroundGray } from "../Constants/Colors"
import Footer from "../Components/Footer"
import { useState } from "react"
import WeekDay from "../Components/WeekDay"

export default function Habits() {
    const [openAddHabit, setOpenAddHabit] = useState(false)
    const weekDay = ["D","S","T","Q","Q","S","S"]
    const [daysChoose, setDaysChoose] = useState([]) 

    function openedAddHabit() {
        setOpenAddHabit(true)
    }

    function cancelAddHabit() {
        setOpenAddHabit(false)
    }


    return (
        <>
            <NavBar />
            <HabistContainer>
                <NewHabit>Meus hábitos
                    <button onClick={openedAddHabit}>+</button>
                </NewHabit>
                {openAddHabit && <AddHabitStyle>
                    
                        <FormStyle>
                            <input placeholder="nome do hábito"></input>
                            <WeekDayContainer>
                            {weekDay.map((d, index)=> <WeekDay key={index} name={d}/>)}
                            </WeekDayContainer>
                            <ContainerButtons>
                                <CancelButton onClick={cancelAddHabit}>Cancelar</CancelButton>
                                <SaveButton type="submit">Salvar</SaveButton>
                            </ContainerButtons>
                        </FormStyle>
                    
                </AddHabitStyle>}
                <NoHabistMsg>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </NoHabistMsg>
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
height: 45px;
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
height: 527px;
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