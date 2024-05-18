import { Container, Content, Navigation, Icon, Dropdown, DropdownItem } from "./styles";
import teralinklogo from '../../assets/teralinklogo.png';
import { FaUser } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';


export function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownActiveIndex, setDropdownActiveIndex] = useState(null);
    const dropdownRef = useRef(null);
    const navigate = useNavigate(); // Adicione esta linha para obter acesso ao hook useNavigate

    // Função para verificar se o usuário está logado
    const isLoggedIn = () => {
        return!!localStorage.getItem('token');
    };

    const handleEntrarClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleDropdownItemClick = (index) => {
        if (dropdownActiveIndex === index) {
            setDropdownActiveIndex(null); // Reset if clicked again
        } else {
            setDropdownActiveIndex(index);
        }
    };

    const handleUserIconClick = () => {
        navigate('/userpatientprofile'); // Navegue para a página desejada
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current &&!dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Container>
            <Content>
                <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} style={{ textDecoration: 'none' }}>
                    <img src={teralinklogo} alt="logo da Teralink" />
                </a>

                <Navigation>
                    <ul>
                        <li>Como funciona</li>
                        <li>Contato</li>
                        <li>Sobre nós</li>
                        {/* Renderiza o ícone de usuário se o usuário estiver logado */}
                        {!isLoggedIn() && (
                            <li onClick={handleEntrarClick} style={{ position: 'relative' }}>
                                Entrar
                                {showDropdown && (
                                    <Dropdown ref={dropdownRef}>
                                        <DropdownItem className={dropdownActiveIndex === 0? 'active' : ''} onClick={() => handleDropdownItemClick(0)}>
                                            <a href="/SignInPatient">Como paciente</a>
                                        </DropdownItem>
                                        <DropdownItem className={dropdownActiveIndex === 1? 'active' : ''} onClick={() => handleDropdownItemClick(1)}>Como terapeuta</DropdownItem>
                                    </Dropdown>
                                )}
                            </li>
                        )}
                        {/* Renderiza o ícone de usuário se o usuário estiver logado */}
                        {isLoggedIn() && (
                            <Icon onClick={handleUserIconClick}><FaUser /></Icon> 
                        )}
                    </ul>
                </Navigation>
            </Content>
        </Container>
    );
}