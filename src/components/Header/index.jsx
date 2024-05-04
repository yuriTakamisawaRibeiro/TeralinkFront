import { Container, Content, Navigation, Icon} from "./styles"
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
                        
                        <li>Como funciona</li>
                        <li>Contato</li>
                        <li>Sobre nós</li>
                        <li>Entrar</li>
                        
                    </ul>
                </Navigation>
                {/* <Icon>
                    <FaUser />
                </Icon> */}
            </Content>
            

        </Container>
    )
}