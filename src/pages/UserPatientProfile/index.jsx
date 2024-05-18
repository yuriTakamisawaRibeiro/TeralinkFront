import { Header } from "../../components/Header"
import { ProfileOption } from "../../components/ProfileOption"
import { Container, Background1, DataArea, Title,Area, ButtonArea } from "./styles"
import background1 from "../../assets/background1.svg"
import { LogoutButton } from "../../components/LogoutButton"
import { useNavigate } from 'react-router-dom';

export const UserPatientProfile = () => {
    const navigate = useNavigate();
    
    function handleLogout() {
        localStorage.removeItem('token'); // Remove o token do localStorage
        console.log("Logout realizado.");
        navigate('/');
        // Aqui você pode adicionar qualquer outra lógica de logout necessária
    }

    return (
        <Container>
            <Background1 background={background1} />
            <Header />

            <DataArea style={{ alignItems: 'center' }}>
                <Area>
                    <Title>Meus dados</Title>
                    <ProfileOption title="Minhas consultas" subtitle="Histórico de consultas" />
                </Area>
                <ProfileOption title="Informações pessoais" subtitle="Nome completo, email e CPF" />
                <ProfileOption title="Credenciais" subtitle="Gerenciar senha" />
                <ButtonArea>
                 <LogoutButton title="Sair" onLogout={handleLogout}/>

                </ButtonArea>
            </DataArea>
                
        </Container>
    )
}