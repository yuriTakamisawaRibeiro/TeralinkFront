import styled from 'styled-components'

export const Container = styled.button `
    width: 80%;
    background-color: #38A1FF;
    color: #F6F6F6;
    height: 80px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;
    font-size:30px;
    text-align:center;
    justify-content:center; 
    margin-bottom: 20px;
    &:disabled{
        opacity: 0.5;
    }
`