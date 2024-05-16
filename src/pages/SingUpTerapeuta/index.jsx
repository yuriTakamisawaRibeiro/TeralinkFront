import { Container, Logo, Wave, Content, Title} from "./styles";
import teralinklogo from '../../assets/teralinklogo.png';
import wave from '../../assets/wave.svg';
import { FormBox } from "../../components/FormBox";
import { InputSignUpIn } from "../../components/InputSignUpIn";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { api } from "../../services/api";
import { useState } from "react";
import { ButtonSignUpIn } from "../../components/ButtonSignUpIn";


export const SingUpTerapeuta = () => {
    const [name, setName] = useState('');
    const [cfm, setCfm] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterClick = async () => {

        const terapeuta = {
            userType: '2', 
            name,
            cfm,
            email,
            password
        };
        try{
            await api.post('/auth/singup', terapeuta);
            alert('Usúario cadastrado com sucesso!');
            setName('');
            setEmail('');
            setCfm('');
            setPassword('');
            window.location.reload();
        }catch (error){
            alert('Erro ao cadastrar usuário, tente novamente.')
        }
    };

    return (
        <Container>
            <Logo src={teralinklogo}/>
            <Wave src = {wave}/>
            <Content>
                <Title>Cadastre-se como terapeuta</Title>
                <FormBox>
                <InputSignUpIn value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Nome Completo" icon={FaUser} />
                <InputSignUpIn value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" icon={MdEmail} />
                <InputSignUpIn value={cfm} onChange={e => setCfm(e.target.value)} type="text" placeholder="CFM" icon={FaUser} />
                <InputSignUpIn value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha" icon={FaLock} />
                <ButtonSignUpIn title="Cadastrar" />
                <a href="">Já possui cadastro?</a>
                
                
                </FormBox>
            </Content>
            
            
        </Container>
        
    )

}