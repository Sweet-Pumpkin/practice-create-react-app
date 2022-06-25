import styled from "styled-components";

export const WelcomeStyle = styled.div`
  div {
    opacity: ${props => props.colorState ? "1" : "0"};
    height: ${props => props.colorState ? "21px" : "0px"};
    border: 1px solid blue;
    transition: 1s;
  }
`