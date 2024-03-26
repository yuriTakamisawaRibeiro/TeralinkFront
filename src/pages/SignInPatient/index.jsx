import { Container, Logo, Welcome,Content, Title, Wave} from "./styles";
import { ButtonSignUpIn } from "../../components/ButtonSignUpIn";
import { FormBox } from "../../components/FormBox";
import teralinklogo from '../../assets/teralinklogo.png';
import welcome from '../../assets/welcome.svg';
import wave from '../../assets/wave.svg';
import { InputSignUpIn } from "../../components/InputSignUpIn";
import {FaUser, FaLock  } from "react-icons/fa"
import {MdEmail} from "react-icons/md"

export const SigninPatient = () => {
    return (
        <Container>
            <Logo src={teralinklogo} alt="logo da Teralink"/>
            <Welcome src={welcome} alt="imagem de boas-vindas"/>
            <Wave src={wave} alt="background de uma onda"/>
            <Content>
                <FormBox>
                <Title>Crie sua conta</Title>
                <InputSignUpIn  type="text" placeholder="Nome Completo" icon={FaUser} />
                <InputSignUpIn type= "text" placeholder="CPF" icon={FaUser } />
                <InputSignUpIn type= "email" placeholder="E-mail" icon={MdEmail} />
                <InputSignUpIn type= "password" placeholder="Senha" icon={FaLock} />
                <ButtonSignUpIn title="Cadastrar" />
                <a href='/'>Já tem uma conta?</a>
                </FormBox>
            </Content>
        </Container>
    )
}