import { Container, Logo, Welcome,Content, Title, Wave} from "./styles";
import { ButtonSignUpIn } from "../../components/ButtonSignUpIn";
import { FormBox } from "../../components/FormBox";
import teralinklogo from '../../assets/teralinklogo.png';
import Loginimg from '../../assets/LoginImg.svg';
import wave from '../../assets/wave.svg';
import { InputSignUpIn } from "../../components/InputSignUpIn";
import {FaUser, FaLock  } from "react-icons/fa"
import {MdEmail} from "react-icons/md"

export const LoginP = () => {
    return (
        <Container>
            <Logo src={teralinklogo} alt="logo da Teralink"/>
            <Welcome src={Loginimg} alt="imagem de boas-vindas"/>
            <Wave src={wave} alt="background de uma onda"/>
            <Content>
                <FormBox>
                <Title>Acesse sua conta</Title>
                <InputSignUpIn  type="text" placeholder="Nome Completo" icon={FaUser} />
               
                <InputSignUpIn type= "password" placeholder="Senha" icon={FaLock} />
                <ButtonSignUpIn title="Entrar" />
                <a href='/'>Esqueceu sua senha?</a>
                <h2>Ou</h2>
                <a href="/">Crie sua conta</a>
                </FormBox>
            </Content>
        </Container>
    )
}