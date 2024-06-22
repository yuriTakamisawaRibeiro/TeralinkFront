import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import background1 from "../../assets/background1.svg";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Background1, Container, Content1, ScheduleButton } from "./styles";


// S = schedule
export const STerapeuta = () => {
  const [startDate, setStartDate] = useState(new Date());
 

  const handleScheduleClick = async () => {
    const selectedDate = startDate.toLocaleDateString();
    const selectedTime = convertTime12to24(startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    try {
      // Obtém o token do localStorage (ou de onde você o armazena)
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token não encontrado.');
        return;
      }
  
      // Dados do agendamento (você pode ajustar conforme sua API)
      const agendamento = {
        data: selectedDate, // Data selecionada pelo usuário
        hora: selectedTime, // Hora selecionada pelo usuário
      };
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      // Faz a requisição POST para criar o agendamento
      await api.post('/auth/schedule', agendamento, config);

      // Agendamento criado com sucesso!
      console.log('Agendamento criado com sucesso!');
    } catch (error) {
      // Trate possíveis erros
      console.error('Erro ao criar agendamento:', error);
    }
  };
  const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');

    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  };


  return (
    <Container>
      <Content1>
        <Background1 background={background1} />
        <Header />
        {/* Remove the iframe (replaced with event creation logic) */}
        <label>Data e Hora de Agendamento:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          dateFormat="dd-MM-yyyy "
          timeFormat="hh:mm"
        />
        <ScheduleButton onClick={handleScheduleClick}>Agendar</ScheduleButton>
      </Content1>
    </Container>
  );
};