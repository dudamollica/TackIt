import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { backgroundGray, darkBlue, ligthGreen } from "../Constants/Colors";
import Check from "../Assets/check.png";
import { AuthContext } from "../AppContext/auth";

export default function Today() {
  const [todaysHabits, setTodayHabits] = useState([]);
  const [concludesHabits, setConcludesHabits] = useState([]);
  const {token}= useContext(AuthContext)

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.get(URL, config);
    promise.then((res) => {
      setTodayHabits(res.data);
      const alredyConclude = res.data.filter((h) => h.done).map((h)=>h.id);
      setConcludesHabits(alredyConclude);
    });
    promise.catch((err) => console.log(err.data));
  }, []);

  function wichDay() {
    switch (dayjs().day()) {
      case 0:
        return "Domingo";
      case 1:
        return "Segunda";
      case 2:
        return "Terça";
      case 3:
        return "Quarta";
      case 4:
        return "Quinta";
      case 5:
        return "Sexta";
      case 6:
        return "Sábado";
      default:
        break;
    }
  }

  function check(id, done) {
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    const body = "";
    if (!done) {
      const promisePost = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
        body,
        config
      );
      promisePost.then((res) => {
        const URL =
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const promise = axios.get(URL, config);
        promise.then((res) => setTodayHabits(res.data));
        const newConcludes = [...concludesHabits, id];
        setConcludesHabits(newConcludes);
      });
    } else {
      const promisePost = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
        body,
        config
      );
      promisePost.then((res) => {
        const URL =
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const promise = axios.get(URL, config);
        promise.then((res) => setTodayHabits(res.data));
        const newConcludes = concludesHabits.filter((h) => h != id);
        setConcludesHabits(newConcludes);
      });
    }
  }

  return (
    <>
      <NavBar />
      <TodayContainer>
        <DayStyle concludesHabits={concludesHabits.length}>
          {wichDay()}, {dayjs().date()}/{dayjs().month() + 1} <br />
          {concludesHabits.length == 0 ? (
            <p> Nenhum hábito concluído ainda</p>
          ) : (
            <p>{(concludesHabits.length*100/todaysHabits.length).toFixed(0)}% dos hábitos concluídos</p>
          )}
        </DayStyle>
        {todaysHabits.length != 0 &&
          todaysHabits.map((h, index) => (
            <TodayHabits done={h.done} key={index}>
              <div>
                <h1>{h.name}</h1>
                <span>
                  Sequência atual:
                  <CurrentSequence days={h.currentSequence}>
                    {h.currentSequence} dias
                  </CurrentSequence>
                  <br />
                  Seu recorde:
                  <HighestSequence
                    cs={h.currentSequence}
                    hs={h.highestSequence}>
                    {h.highestSequence} dias
                  </HighestSequence>
                </span>
              </div>
              <CheckBox
                onClick={() => check(h.id, h.done)}
                done={h.done ? true : false}>
                <img src={Check} />
              </CheckBox>
            </TodayHabits>
          ))}
      </TodayContainer>
      <Footer />
    </>
  );
}

const HighestSequence = styled.strong`
  color: ${(props) => props.cs == props.hs && props.cs > 0 && ligthGreen};
`;

const CurrentSequence = styled.strong`
  color: ${(props) => props.days > 0 && ligthGreen};
`;

const CheckBox = styled.div`
  width: 69px;
  height: 69px;
  background: ${(props) => (props.done ? ligthGreen : "#EBEBEB")};
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  color: white;
  font-size: 30px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodayHabits = styled.div`
  width: 90%;
  height: 94px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  padding: 15px 10px;
  box-sizing: border-box;
  justify-content: space-between;
  h1 {
    font-size: 20px;
    color: #666666;
  }
  span {
    color: #666666;
    font-size: 13px;
    line-height: 16px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const DayStyle = styled.div`
  font-size: 23px;
  color: ${darkBlue};
  margin-bottom: 40px;
  p {
    color: ${(props) => (props.concludesHabits ? ligthGreen : "#bababa")};
    font-size: 18px;
    margin-top: 5px;
  }
`;

const TodayContainer = styled.div`
  background-color: ${backgroundGray};
  height: 527px;
  padding-top: 30px;
  padding-left: 15px;
  box-sizing: border-box;
`;
