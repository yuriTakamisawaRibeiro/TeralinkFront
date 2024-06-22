import styled from "styled-components";


export const Container = styled.div `
    width:100%;
    overflow-x:hidden;
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
    padding-bottom:74px;
`

export const Calendar = styled.iframe`
width: 800px;
  height: 600px;
  border: 0;
  scrolling: none;
`
export const ScheduleButton = styled.button`
  padding: 8px 16px;

  width: 138px;
  height: 50px;
  background: #24d898;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 20px;
`;