// styled components
import styled from "styled-components";

export const TestStyle = styled.div`
  .title {
    font-size: ${props => props.colorState ? "50px" : "10px"};
    color: ${props => props.colorState ? "red" : "blue"};
    transition: 1s;
  }
`