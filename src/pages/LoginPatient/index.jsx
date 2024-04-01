import { Container, Logo, Welcome,Content, Title, Wave, Subcont} from "./styles";
import { ButtonSignUpIn } from "../../components/ButtonSignUpIn";
import { FormBox } from "../../components/FormBox";
import teralinklogo from '../../assets/teralinklogo.png';
import login from '../../assets/login.svg';
import wave from '../../assets/wave.svg';
import { InputLogin} from "../../components/InputLogin";
import {FaUser, FaLock  } from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import { ButtonLogin } from "../../components/ButtonLogin";

export const LoginPatient = () => {
    return (
        <Container>
            <Logo src={teralinklogo} alt="logo da Teralink"/>
            <Welcome src={login} alt="Imagem de Login"/>
            <Wave src={wave} alt="background de uma onda"/>
            <Content>
                <FormBox>
                <Title>Acesse sua conta</Title>               
                <InputLogin type= "email" placeholder="E-mail" icon={MdEmail} />               
                <InputLogin type= "password" placeholder="Senha" icon={FaLock} />
                <ButtonLogin title="Entrar" />
                <a href="/">Esqueceu sua senha?</a>
                <h2>ou</h2>
                <a href='/'>Criar conta</a>
                </FormBox>
            </Content>
        </Container>
    )
}