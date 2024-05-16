import { Container, Logo, Welcome, Content, Title, Wave, ButtonContainer } from "./styles";
import { ButtonSignUpIn } from "../../components/ButtonSignUpIn";
import { FormBox } from "../../components/FormBox";
import { FormButton } from "../../components/FormButton";
import teralinklogo from '../../assets/teralinklogo.png';
import Loginimg from '../../assets/LoginImg.svg';
import wave from '../../assets/wave.svg';
import { InputSignUpIn } from "../../components/InputSignUpIn";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { api } from "../../services/api";

export const SignInPatient = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await api.post('/auth/login', { email, password });
            if (response.status === 200) {
                const token = response.data.token; // Extrai o token da resposta
                localStorage.setItem('token', token); // Armazena o token no localStorage
                console.log("Usuário logado com sucesso!");
                // Implemente a lógica de redirecionamento ou atualização do estado conforme necessário
            } else {
                throw new Error('Falha na autenticação');
            }
        } catch (error) {
            console.error("Erro ao tentar logar:", error);
            // Trate o erro aqui, por exemplo, mostrando uma mensagem ao usuário
        }
    };

    return (
        <Container>
            <Logo src={teralinklogo} alt="logo da Teralink" />
            <Welcome src={Loginimg} alt="imagem de boas-vindas" />
            <Wave src={wave} alt="background de uma onda" />
            <Content>
                <FormBox>
                    <Title>Acesse sua conta</Title>
                    <InputSignUpIn value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="E-mail" icon={MdEmail} />
                    <InputSignUpIn value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha" icon={FaLock} />
                    <ButtonSignUpIn title="Entrar" onClick={handleLogin} />
                    <ButtonContainer>
                        <FormButton title="Esqueceu sua senha?" />

                        <a href="/SignUpPatient">
                            <FormButton title="Crie sua conta" />
                        </a>
                    </ButtonContainer>
                </FormBox>
            </Content>
        </Container>
    )
}
