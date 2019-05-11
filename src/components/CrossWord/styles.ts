import styled from 'styled-components';
import {
  color_light_gray,
  color_white,
  color_text_button,
  color_gray_button_bg,
  color_gray_button_hover
} from '../../styles/cssVars';

export const GridWrapper = styled.div`
  padding: 2px;
  flex: 0 0 50%;
  max-width: 23em;
  margin-right: 2em;
`;

export const ButtonsWrapper = styled.div`
  order: 2;
  flex: 0 0 100%;
  margin-top: 2em;
  text-align: center;
  button {
    margin-right: 1em;
    background-color: ${color_gray_button_bg};
    color: ${color_text_button};
    border: none;
    cursor: pointer;
    display: inline-block;
    position: relative;
    outline: none;
    padding: 0.6em 1.2em;
    line-height: 1.5em;
    border-radius: 2px;
    transition: all 0.2s linear, color;
    box-shadow: none;
    user-select: none;
    &:hover {
      background-color: ${color_gray_button_hover};
      box-shadow: 0 3px 5px 2px #cbcbcb;
    }
  }
`;

export const WordListWrapper = styled.ul`
  flex: 0 0 30%;
  padding: 0;
  li {
    list-style-position: inside;
    margin-bottom: 0.5em;
  }
`;

export const BlockWrapper = styled.span`
  position: relative;
`;

export const Block = styled.input`
  position: relative;
  /* -1px is used here to avoid double border */
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
