import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    height: 100vh; 
    z-index: 1;
    margin-right:5.313rem;
    margin-left:3.125rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Logo = styled.img`
    position:absolute;
    top: 0;
    left: 0;
    width: 12.5rem;
    z-index: 2; 
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Welcome = styled.img`
    margin-left:150px;
    height: 60vh;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Content = styled.div`
    z-index: 1; 
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    z-index: 1; 
    font-weight: bold;
    text-align:center;
    font-size:2.188rem;
    padding-bottom:1.875rem;
    padding-top:1.875rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Wave = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: 0; 
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;



export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.25rem;
    margin-top: 1.25rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`



