import styled from "styled-components";
import { BottomContainerProps } from "./types";

export const ButtomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 100px;
  width: ${(props: BottomContainerProps) => (props.primary ? "45px" : "35px")};
  height: ${(props: BottomContainerProps) => (props.primary ? "45px" : "35px")};
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67),
    width 0.5s ease-in-out, height 0.5s ease-in-out;
  margin: 0 10px;
  &:hover {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.12);
  }
  & > svg {
    width: 20px;
    height: 20px;
  }
`;
