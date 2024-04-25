import styled from "styled-components";

export const Container = styled.div`

width: 100vw;

`

export const Content = styled.div`

    width: 100%;
    justify-content: space-between;
    padding: 20px 12vw;
    margin-top:30px;
    display: flex;
    align-items: center;
    position: relative;
> img {
    height:150px;
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
    color: #6383ff;
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

export const DivisionLine = styled.hr`
 margin: auto;
    width: 78%;
    height: 1px;
    background-color: #4B5563;
`