import { Container, Logo, Welcome,Content, Title, Wave, ButtonContainer} from "./styles";
import { ButtonSignUpIn } from "../../components/ButtonSignUpIn";
import { FormBox } from "../../components/FormBox";
import { FormButton } from "../../components/FormButton";
import teralinklogo from '../../assets/teralinklogo.png';
import Loginimg from '../../assets/loginimg.svg';
import wave from '../../assets/wave.svg';
import { InputSignUpIn } from "../../components/InputSignUpIn";
import {FaUser, FaLock  } from "react-icons/fa"
import {MdEmail} from "react-icons/md"

export const SignUpPatient = () => {
    return (
        <Container>
            <Logo src={teralinklogo} alt="logo da Teralink"/>
            <Welcome src={Loginimg} alt="imagem de boas-vindas"/>
            <Wave src={wave} alt="background de uma onda"/>
            <Content>
                <FormBox>
                <Title>Acesse sua conta</Title>
                <InputSignUpIn  type="text" placeholder="E-mail" icon={FaUser} />
                <InputSignUpIn type= "password" placeholder="Senha" icon={FaLock} />
                <ButtonSignUpIn title="Entrar" />
                <ButtonContainer>
                    <FormButton title="Esqueceu sua senha?" />
                    <FormButton title="Crie sua conta" />
                </ButtonContainer>
                </FormBox>
            </Content>
        </Container>
    )
}