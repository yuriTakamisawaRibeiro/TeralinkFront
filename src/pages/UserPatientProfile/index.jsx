import { Header } from "../../components/Header"
import { ProfileOption } from "../../components/ProfileOption"
import { Container, Background1, DataArea, Title,Area } from "./styles"
import background1 from "../../assets/background1.svg"


export const UserPatientProfile = () => {


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
            </DataArea>
        </Container>
    )
}