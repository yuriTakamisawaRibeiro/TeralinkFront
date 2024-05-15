import { Container, Content, Navigation, Icon } from "./styles";
import teralinklogo from '../../assets/teralinklogo.png';
import { FaUser } from "react-icons/fa";
import { Dropdown } from 'react-bootstrap';

export function Header() {
    const handleDropdown = (eventKey) => {
        console.log(`Selected ${eventKey}`);
    };

    return (
        <Container>
            <Content>
                <img src={teralinklogo} alt="logo da Teralink" />

                <Navigation>
                    <ul>
                        <li>Como funciona</li>
                        <li>Contato</li>
                        <li>Sobre nós</li>
                        <li>
                            <Dropdown onSelect={handleDropdown}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Entrar
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="comoPaciente">Como paciente</Dropdown.Item>
                                    <Dropdown.Item eventKey="comoTerapeuta">Como terapeuta</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </Navigation>
                {/* <Icon>
                    <FaUser />
                </Icon> */}
            </Content>
        </Container>
    );
}
