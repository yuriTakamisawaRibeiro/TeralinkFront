import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    height: 100vh; 
    z-index: 1;
    margin-right:5.313rem;
    margin-left:3.125rem;
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
`;

export const Title = styled.h1`
    z-index: 1; 
    font-weight: bold;
    text-align:center;
    font-size:2.188rem;
    padding-bottom:1.25rem;
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
`

