import { Header } from "../../components/Header"
import{ InputSignUpIn }from "../../components/InputSignUpIn"
import { Container, Background1, DataArea, Title,Area,ButtonUpdate } from "./styles"
import background1 from "../../assets/background1.svg"
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";



export const UserPassword = () => {
    const[password, setPassword] = useState('');
    
    

    const handleUpdateClick = async () => {

        const user = {
            userType: '1', 
            name,
            cpf,
            email,
            password
        };
    
        try {
            await api.post('/auth/signup', user); 
            alert('Senha atualizada com sucesso!');
            setPassword('');
            window.location.reload();

        } catch (error) {
            alert('Erro ao atualizar a senha tente novamente');
        }
    };


    return (
        <Container>
            <Background1 background={background1} />
            <Header />

            <DataArea style={{ alignItems: 'center' }}>
                <Area>
                    <Title>Credenciais</Title>
                    <h2>Atualizar senha</h2>
                    <InputSignUpIn value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="*******" icon={FaLock} />
                    <ButtonUpdate onClick= {handleUpdateClick}title="atualizar"/>
                    
                    
                    
                    
                </Area>
                
                
            </DataArea>
        </Container>
    )
}