import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    overflow-x: hidden;
    
    
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
export const Wave = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: 0; 
`;
export const Content = styled.div`


position: absolute;
left: 10%;
right: 40%;
top: 25%;
bottom: 0%;


`

export const Title = styled.h1`
    z-index: 1; 
    font-weight: bold;
    text-align:center;
    font-size:2.188rem;
    padding-bottom:1.25rem;
`;