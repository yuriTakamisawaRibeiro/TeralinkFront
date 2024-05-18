import styled from 'styled-components'

export const Container = styled.button `
    width: fit-content;
    background-color: #24D898;
    color: #F6F6F6;
    height: 60px;
    border: 0;
    padding: 0 16px;
    margin-top: 20px;
    border-radius: 10px;
    font-weight: 500;
    font-size:25px;
    text-align:center;
    justify-content:center; 
    margin-bottom: 10px;
    align-self: flex-start;
    &:disabled{
        opacity: 0.5;
    }
`