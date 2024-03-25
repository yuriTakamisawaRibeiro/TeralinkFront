import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    height: 100vh; 
    z-index: 1;
    margin-right:80px;
    margin-left:50px;
`;

export const Logo = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    z-index: 1; 
`;

export const Welcome = styled.img`
    align-self: center;
    z-index: 1; 
    width: auto;
    height: 800px;
    margin-left:200px;
`;

export const Content = styled.div`
    z-index: 1; 
`;

export const Title = styled.h1`
    z-index: 1; 
`;

export const Form = styled.form`
    z-index: 1; 
    margin-left:30px;
    margin-right:30px;
    margin-top: 30px;
    justify-content:center;
    align-items:center;
`;

export const Wave = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1; // Ajuste o z-index para -1 para garantir que o Wave não cubra o FormBox
`;

export const FormBox = styled.div`
    z-index: 2; // Manter o z-index como 2
    background-color: #ffffff; // Corrigido para #ffffff para garantir que o fundo seja branco
    width: 600px;
    height: 80vh;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35); // Corrigido para incluir uma cor
`;