import styled from "styled-components";

export const Container = styled.div `
    width:100%;
    overflow-x:hidden;
`

export const Background1 = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.background});
    background-size: cover;
    z-index: -1;
`

export const Content1 = styled.div`
    padding-bottom:74px;
`

export const BannerArea = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    margin-top:100px;
    padding-left:12vw;
    padding-right:12vw;
`

export const Psychologist = styled.img`
    height:420px;
`

export const BannerText = styled.div`
    margin-right: 10vw;
   
    > h1, h2 {
        color: #f6f6f6;
        margin-top:20px;
    }

    > h1 {
        font-size:30px;
        line-height:40px;
    }

    > h2 {
        width:100%;
        font-size:28px;
    }
`

export const ButtonArea = styled.div`
`

export const Content2 = styled.div`
    background-color:#EAEAEA;
    display:flex;
    justify-content:space-between;
    padding-left:12vw;
    padding-right:12vw;
    padding-top:60px;
`

export const BlobArea = styled.div`
    position: relative;
`

export const Blob = styled.img`
    height:550px;
    max-width: 100%;
`

export const StyledAnalise = styled.img`
    height: 450px;
    align-items:center;
    max-width: 100%;
`

export const SH1 = styled.h1`
    position: absolute;
    top: 20%;
    left: 42%;
    width: 17rem;
    transform: translate(-50%, -50%);
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 2rem;
`

export const ST1 = styled.text`
    position: absolute;
    width: 25.188rem;
    height: 15.625rem;
    left: 19%;
    top: 22%;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 2.2rem;
    color: #000000;
`

export const Content3 = styled.div`
    padding-left:12vw;
    padding-right:12vw;
    padding-top:60px;
    background: linear-gradient(0deg, #8966FF 25.5%, #765BCF 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    > h2 {
        color: #FFFF;
        text-align:center;
        font-size: 40px;
        padding-bottom: 50px;
    }
`

export const ImageRows = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 100px;
`

export const ImageRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end; 
    text-align: center;
    color: #fff;
    font-size: 25px;

    > h3 {
        padding-top:10px;
    }
`

export const StyledHug = styled.img`
    height: 200px; // Ajuste este valor para o tamanho desejado
`;

export const C3_4 = ImageRow;
export const C3_3 = ImageRow;

export const Title2 = styled.div`
`
