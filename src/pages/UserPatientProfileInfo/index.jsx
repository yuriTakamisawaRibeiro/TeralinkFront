import { Header } from "../../components/Header";
import {
  Container,
  Background1,
  DataArea,
  Title,
  Area,
  ButtonArea,
  InputArea,
  Input,
  BackButton,
  UpdateButton,
} from "./styles";
import background1 from "../../assets/background1.svg";
import { useNavigate } from "react-router-dom";

export const UserPatientProfileInfo = () => {
  const navigate = useNavigate();

  

  return (
    <Container>
      <Background1 background={background1} />
      <Header />

      <DataArea style={{ alignItems: "center" }}>
        <Area>
          <Title>Informações pessoais</Title>
          <InputArea>
            <h2>Nome completo</h2>
            <Input />
            <h2>E-mail</h2>
            <Input />
            <h2>CPF</h2>
            <Input 
            disabled={true}/>
          </InputArea>
          <ButtonArea>
            <a href="/userpatientprofile"><BackButton>Voltar</BackButton></a>
            <UpdateButton>Atualizar</UpdateButton>
          </ButtonArea>
        </Area>
      </DataArea>
    </Container>
  );
};
