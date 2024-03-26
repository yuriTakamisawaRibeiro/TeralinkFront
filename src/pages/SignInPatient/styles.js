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
    height: 70vh;
`;

export const Content = styled.div`
    z-index: 1; 
`;

export const Title = styled.h1`
    z-index: 1; 
    font-weight: bold;
    text-align:center;
    font-size:35px;
    padding-bottom:20px;
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

