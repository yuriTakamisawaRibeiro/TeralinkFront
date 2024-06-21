import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    z-index: 1;
    margin-right: 5.313rem;
    margin-left: 3.125rem;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        margin: 0;
        padding: 1rem;
        height: auto;
    }
`;

export const Logo = styled.img`
    position: absolute;
    top: 30px; /* Ajuste conforme necessário */
    left: 50px; /* Ajuste conforme necessário */
    height: 130px;
    z-index: 2;
    cursor: pointer;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Welcome = styled.img`
    margin-left: 150px;
    height: 60vh;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Content = styled.div`
    z-index: 1;

    @media (max-width: 768px) {
        margin-top: 3rem;
    }
`;

export const Title = styled.h1`
    z-index: 1;
    font-weight: bold;
    text-align: center;
    font-size: 2.188rem;
    padding-bottom: 1.875rem;
    padding-top: 1.875rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        padding: 1rem 0;
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
        position: relative;
        height: auto;
    }
`;

export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.25rem;
    margin-top: 1.25rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        margin-top: 2rem;
    }
`;


