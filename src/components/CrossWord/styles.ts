import styled from 'styled-components';
import { color_light_gray, color_white } from '../../styles/cssVars';

export const BlockWrapper = styled.span`
  position: relative;
`;

export const Block = styled.input`
  position: relative;
  margin-left: -1px;
  margin-top: -1px;
  height: 1.5em;
  width: 1.5em;
  border: 1px solid black;
  box-sizing: border-box;
  display: inline-block;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.5;
  z-index: 1;
  ${props =>
    props.disabled &&
    `
  background-color: ${color_white};
  border-color: ${color_light_gray};
  z-index:0;
  `}
`;

export const Overlay = styled.span`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  text-align: center;
  color: ${props => props.color};
  background-color: rgba(255, 255, 255, 0.7);
`;
