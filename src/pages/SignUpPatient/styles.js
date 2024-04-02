import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    height: 100vh; 
    z-index: 1;
    margin-right:85px;
    margin-left:50px;
`;

export const Logo = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    z-index: 2; 
`;

export const Welcome = styled.img`
    margin-left:150px;
    height: 60vh;
`;

export const Content = styled.div`
    z-index: 1; 
`;

export const Title = styled.h1`
    z-index: 1; 
    font-weight: bold;
    text-align:center;
    font-size:35px;
    padding-bottom:30px;
    padding-top:30px;
`;

export const Wave = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: 0; 
`;



export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
`



