import styled from "styled-components";
import { color_light_gray, color_white } from "./cssVars";

export const Block = styled.input`
  height: 1.5em;
  width: 1.5em;
  border: 1px solid black;
  box-sizing: border-box;
  display: inline-block;
  text-transform: uppercase;
  text-align: center;
  line-height:1.5;
  ${props => props.disabled && `
  background-color: ${color_white};
  border-color: ${color_light_gray};
  `}
`
