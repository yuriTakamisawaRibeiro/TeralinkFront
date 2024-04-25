import { Container, Content, Navigation, Icon, DivisionLine} from "./styles"
import teralinklogo from '../../assets/teralinklogo.png';
import { FaUser } from "react-icons/fa";
// import { Link, useNavigate } from 'react-router-dom';
export function Header() {


    return (

        <Container>
            <Content>
                <img src={teralinklogo} alt="logo da Teralink" />

                <Navigation>
                    <ul>
                        
                        <li>Agendar</li>
                        <li>Sobre nós</li>
                        <li>Contato</li>
                    </ul>
                </Navigation>
                <Icon>
                    <FaUser />
                </Icon>
            </Content>
            <DivisionLine></DivisionLine>

        </Container>
    )
}