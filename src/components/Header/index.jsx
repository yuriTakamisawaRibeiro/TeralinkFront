import { Container, Content, Navigation, Icon, Dropdown, DropdownItem } from "./styles";
import teralinklogo from '../../assets/teralinklogo.png';
import { FaUser } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownActiveIndex, setDropdownActiveIndex] = useState(null);
    const dropdownRef = useRef(null);

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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
                <img src={teralinklogo} alt="logo da Teralink" />

                <Navigation>
                    <ul>
                        <li>Como funciona</li>
                        <li>Contato</li>
                        <li>Sobre nós</li>
                        <li onClick={handleEntrarClick} style={{ position: 'relative' }}>
                            Entrar
                            {showDropdown && (
                                <Dropdown ref={dropdownRef}>
                                    <DropdownItem className={dropdownActiveIndex === 0 ? 'active' : ''} onClick={() => handleDropdownItemClick(0)}>
                                        <a href="/SignInPatient">Como paciente</a>
                                    </DropdownItem>
                                    <DropdownItem className={dropdownActiveIndex === 1 ? 'active' : ''} onClick={() => handleDropdownItemClick(1)}>Como terapeuta</DropdownItem>
                                </Dropdown>
                            )}
                        </li>
                    </ul>
                </Navigation>
            </Content>
        </Container>
    );
}
