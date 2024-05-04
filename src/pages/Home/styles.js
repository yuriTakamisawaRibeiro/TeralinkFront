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