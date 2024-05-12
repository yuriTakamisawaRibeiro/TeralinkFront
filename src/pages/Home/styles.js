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
    height:550px;
    max-width: 100%;
`

export const HomeImage2 = styled.img`
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
width: 22.188rem;
height: 15.625rem;
left: 19%;
top: 30%;


font-weight: 400;
font-size: 1.1rem;
line-height: 2.2rem;

color: #000000;


`
//------------------------------------------Content 3 --------------------------------------------------------

export const Content3 = styled.div`

box-sizing: border-box;

position: absolute;
width: 100%;
height: 65%;
left: 0px;
top: 1511px;

background: linear-gradient(0deg, #8966FF 25.5%, #765BCF 100%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


`
export const Title = styled.h1`
    /* Como funciona a Teralink */
    position: absolute;
    width: 496px;
    height: 48px;
    left: 50%;
    top: 55px;
    transform: translateX(-50%);
    color: #FFFFFF;`

    export const C3img1 = styled.img`


position: absolute;
width: 243px;
height: 232px;
left: 100px;
top: 141px;
`
export const C3img2 = styled.img`
/* Calendar-rafiki 1 */

position: absolute;
width: 250px;
height: 250px;
left: 650px;
top: 148px;


`
export const C3img3 = styled.img`
/* Mental health-bro 1 */

position: absolute;
width: 250px;
height: 250px;
left: 1200px;
top: 137px;
`
export const ImgText = styled.h2`
/* Procure seu terapeuta */

position: absolute;
width: 272px;
height: 30px;
left: 100px;
top: 373px;


font-weight: 700;
font-size: 25px;
line-height: 30px;
text-wrap: nowrap;

color: #FFFFFF;
`
export const ImgText2 = styled.h2`
/* Procure seu terapeuta */

position: absolute;
width: 272px;
height: 30px;
left: 600px;
top: 373px;


font-weight: 700;
font-size: 25px;
line-height: 30px;
text-wrap: nowrap;

color: #FFFFFF;
`
export const ImgText3 = styled.h2`
/* Procure seu terapeuta */

position: absolute;
width: 272px;
height: 30px;
left: 1150px;
top: 373px;


font-weight: 700;
font-size: 25px;
line-height: 30px;
text-wrap: nowrap;

color: #FFFFFF;
`
export const FooterFixed = styled.footer`
    background-color: #f8f9fa;
    text-align: center;
    padding: 5px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
`
export const Footer = styled.footer`


position: absolute;
width: 100%;
height: 25%;
left: 0px;
top: 2028px;

background: #e1e1e1;

`
export const Flogo = styled.img`


position: relative;
width: 12%;
left: 5%;
right: 86.85%;
top: 0%;
bottom: 38.27%;



`
export const FNav = styled.div`


position: absolute;
width: 153px;
height: 200px;
left: 25%;
top: 32px;
line-height: 2.3rem;


`
export const FSup = styled.div`


position: absolute;
width: 127px;
height: 177px;
left: 40%;
top: 34px;
line-height: 2.3rem;


`

