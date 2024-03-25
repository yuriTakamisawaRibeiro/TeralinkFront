import { Container, Logo, Welcome,Content, Title, Form, Wave, FormBox} from "./styles";
import { ButtonSignUpIn } from "../../components/ButtonSignUpIn";
import teralinklogo from '../../assets/teralinklogo.png';
import welcome from '../../assets/welcome.svg';
import wave from '../../assets/wave.svg';
import { InputSignUpIn } from "../../components/InputSignUpIn";
import {FaUser, FaLock  } from "react-icons/fa"
import {MdEmail} from "react-icons/md"

export const SigninPatient = () => {
    return (
        <Container>
            <Wave src={wave} alt="background de uma onda"/>
            <Logo src={teralinklogo} alt="logo da Teralink"/>
            <Welcome src={welcome} alt="imagem de boas-vindas"/>
            <Content>
                <FormBox>
                <Title>Crie sua conta</Title>
                <Form>
                <InputSignUpIn  type="text" placeholder="Nome" icon={FaUser} />
                <InputSignUpIn type= "text" placeholder="CPF" icon={FaUser } />
                <InputSignUpIn type= "email" placeholder="E-mail" icon={MdEmail} />
                <InputSignUpIn type= "password" placeholder="Senha" icon={FaLock} />
                <ButtonSignUpIn title="Cadastrar" />
                <a href='/'>Já tem uma conta?</a>
                </Form>
                </FormBox>
            </Content>
        </Container>
    )
}
