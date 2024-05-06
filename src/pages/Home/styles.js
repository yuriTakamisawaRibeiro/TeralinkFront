import styled from "styled-components";

export const Container = styled.div `
    width:100%;

`

// ----------------------------------------------------- Content 1 --------------------------------------------------------------

export const Background1 = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.background});
    background-size: cover;
    z-index: -1;

`

export const Content1 = styled.div`
    padding-bottom:100px;
`

export const BannerArea = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    margin-top:100px;
    padding-left:12vw;
    padding-right:12vw;
    

`

export const HomeImage1 = styled.img`
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


// ----------------------------------------------------- Content 2 --------------------------------------------------------------
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
    height:470px;
    max-width: 100%;
`

export const HomeImage2 = styled.img`
    height: 450px;
    align-items:center;
    max-width: 100%;
`
export const SH1 = styled.h1`

position: absolute;
    top: 15%;
    left: 49%;
    width: 16rem;
    transform: translate(-50%, -50%);

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 2rem;

`
export const ST1 = styled.text`

position: absolute;
width: 22.188rem;
height: 15.625rem;
left: 12%;
top: 28%;

font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 1.21rem;
line-height: 2.19rem;

color: #000000;


`
//------------------------------------------Content 3 --------------------------------------------------------

export const Content3 = styled.div`

background-color:#EAEAEA;
    display:flex;
    justify-content:space-between;
    padding-left:12vw;
    padding-right:;
    padding-top:300px;

background: linear-gradient(0deg, #8966FF 25.5%, #765BCF 100%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`
export const T2 = styled.h1`

align-items: center;
color: #FFFFFF;




`


