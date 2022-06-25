// styled components
import styled from "styled-components";

export const TestStyle = styled.div`
  .title {
    color: ${props => props.colorState ? "red" : "blue"};
    transition: 1s;
  }
`