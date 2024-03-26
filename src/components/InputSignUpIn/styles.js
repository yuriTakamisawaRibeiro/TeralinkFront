import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #F6F6F6;
    color: #212427;
    border-radius: 10px;
    margin-bottom:30px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
    > input{
        
        height: 75px;
        width: 100%;
        padding: 35px;
        color: #212427;
        background: transparent;
        border: 0;

        &:placeholder{
            color: #212427;
        }
    }
    > svg{
            margin-left: 16px;
        }
`;