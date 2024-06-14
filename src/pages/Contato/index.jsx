import { Header } from "../../components/Header";
import {
  Container,
  Background1,
  DataArea,
  Title,
  ButtonArea,
  BackButton,
  InputArea,
  Input,
  UpdateButton,
} from "./styles";
import background1 from "../../assets/background1.svg";
import { useNavigate } from "react-router-dom";

export const Contato = () => {
  const navigate = useNavigate();

  // Função fictícia para lidar com o envio do formulário de contato
  function handleSubmit(event) {
    event.preventDefault();
    // Lógica de envio do formulário aqui
  }

  return (
    <Container>
      <Background1 background={background1} />
      <Header />

      <DataArea style={{ alignItems: "center" }}>
        <Title>Entre em Contato</Title>
        <form onSubmit={handleSubmit}>
          <InputArea>
            <h2>Envie-nos uma mensagem</h2>
            <Input type="text" placeholder="Seu nome" />
            <Input type="email" placeholder="Seu email" />
            <Input type="tel" placeholder="Seu telefone" />
            <textarea rows="4" placeholder="Sua mensagem"></textarea>
          </InputArea>
          <ButtonArea>
            <BackButton onClick={() => navigate("/")}>Voltar</BackButton>
            <UpdateButton type="submit">Enviar</UpdateButton>
          </ButtonArea>
        </form>
      </DataArea>
    </Container>
  );
};

