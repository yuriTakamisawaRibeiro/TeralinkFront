import { Container, Logo, Welcome, Content, Title, Wave } from "./styles";
import { ButtonSignUpIn } from "../../components/ButtonSignUpIn";
import { FormBox } from "../../components/FormBox";
import teralinklogo from '../../assets/teralinklogo.png';
import welcome from '../../assets/welcome.svg';
import wave from '../../assets/wave.svg';
import { InputSignUpIn } from "../../components/InputSignUpIn";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { api } from "../../services/api";
import { useState } from "react";

export const SignUpPatient = () => {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // Estado para confirmação de senha

    const handleRegisterClick = async () => {
        if (password!== confirmPassword) {
            alert('As senhas não correspondem.');
            return; // Interrompe a execução se as senhas não corresponderem
        }
    
        const user = {
            userType: '1', 
            name,
            cpf,
            email,
            password
        };
    
        try {
            await api.post('/auth/signup', user); 
            alert('Usuário cadastrado com sucesso!');
            setName('');
            setCpf('');
            setEmail('');
            setPassword('');
            setConfirmPassword(''); 
            window.location.reload();
        } catch (error) {
            alert('Erro ao cadastrar usuário, tente novamente.');
        }
    };

    return (
        <Container>
            <Logo src={teralinklogo} alt="logo da Teralink"/>
            <Welcome src={welcome} alt="imagem de boas-vindas"/>
            <Wave src={wave} alt="background de uma onda"/>
            <Content>
                <FormBox>
                    <Title>Crie sua conta</Title>
                    <InputSignUpIn value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Nome Completo" icon={FaUser} />
                    <InputSignUpIn value={cpf} onChange={e => setCpf(e.target.value)} type="text" placeholder="CPF" icon={FaUser} />
                    <InputSignUpIn value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail" icon={MdEmail} />
                    <InputSignUpIn value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha" icon={FaLock} />
                    <InputSignUpIn value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder="Confirme a senha" icon={FaLock} />
                    <ButtonSignUpIn onClick={handleRegisterClick} title="Cadastrar" />
                    <a href='/'>Já tem uma conta?</a>
                </FormBox>
            </Content>
        </Container>
    )
}
