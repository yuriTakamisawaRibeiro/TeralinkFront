import styled from "styled-components";

export const Container = styled.div`

width: 100vw;
padding-top:15px;
`

export const Content = styled.div`

    width: 100%;
    justify-content: space-between;
    padding: 20px 12vw;
    display: flex;
    align-items: center;
    position: relative;
> img {
    height:120px;
}


`

export const Navigation = styled.nav`
> ul{
    display: flex;
    list-style: none;
    gap: 60px;
    
    font-weight: 600;
    font-size: 22px;
}

ul li{
    cursor: pointer;
    position: relative;
}

ul li:hover{
    color: #f6f6f6;
    transition: 0.3s;
}
`

export const Icon = styled.span`
font-size: 20px;
font-size: 35px;

:hover{
    color: #6383ff;
    transition: all ease-in-out 200ms;

    cursor: pointer;
    
}
`

