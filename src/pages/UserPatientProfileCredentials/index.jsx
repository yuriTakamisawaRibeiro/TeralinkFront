import { Header } from "../../components/Header";
import {
  Container,
  Background1,
  DataArea,
  Title,
  Area,
  ButtonArea,
  BackButton,
  InputArea, 
  UpdateButton,
  Input,
  DeleteAccountButton
} from "./styles";
import background1 from "../../assets/background1.svg";

import { useNavigate } from "react-router-dom";

export const UserPatientProfileCredentials = () => {
  const navigate = useNavigate();


  return (
    <Container>
      <Background1 background={background1} />
      <Header />

      <DataArea style={{ alignItems: "center" }}>
        <Area>
          <Title>Credenciais</Title>
          <InputArea>
            <h2>Atualizar senha</h2>
            <Input 
            disabled={true}/>
          </InputArea>
          <ButtonArea>
            <a href="/userpatientprofile"><BackButton>Voltar</BackButton></a>
            <UpdateButton>Enviar</UpdateButton>
          </ButtonArea>
          <DeleteAccountButton>Excluir Conta</DeleteAccountButton>
        </Area>
      </DataArea>
    </Container>
  );
};
