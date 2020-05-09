import styled, { css } from "styled-components";
import { ButtonContainerProps, BaseComponentProps } from "./types";

export const BaseComponent = styled.div<BaseComponentProps>`
display: flex;
align-items: center;
justify-content: center;
width: 55px;
right: ${(props) => props.buttonPosition === 1 ? "50%" : "inherit"};
left: ${(props) => props.buttonPosition === 3 ? "50%" : "inherit"};
`;
export const ButtomContainer = styled.div<ButtonContainerProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 100px;
  width: 35px;
  height: 35px;
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.12);
  transition: box-shadow .2s ease-in-out, width .2s linear, height .2s linear;
  ${(props) =>
    props.primary &&
    css`
      width: 45px;
      height: 45px;
    `}
  &:hover {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.12);
  }
  & > svg {
    width: 20px;
    height: 20px;
  }
`;
