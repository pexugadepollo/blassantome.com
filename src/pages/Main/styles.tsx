import styled from "styled-components";
import backgroundImage from "../../img/blue-fluid.jpg";

export const Background = styled.div`
  background: url(${backgroundImage}) no-repeat center center fixed;
  filter: blur(1.5rem);
  background-size: cover;
  background-color: rgb(170, 202, 207);
  min-height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
`;

export const Box = styled.div`
  font-family: Roboto;
  background-color: #fff;
  width: 25vw;
  height: 40vh;
  border-radius: 30px;
  padding: 40px;
`;

export const BottomButtomBar = styled.div`

`

export const AnimatedText = styled.div`
  text-align: "center";
  display: flex;
  justify-content: center;
  & > p {
    position: absolute;
    font-weight: 100;
    font-size: 0px;
    opacity: 0;
    &:first-child {
      animation: up 5s linear infinite 0s;
    }
    &:nth-child(2) {
      animation: up 5s linear infinite 1s;
    }
    &:nth-child(3) {
      animation: up 5s linear infinite 2s;
    }
    &:nth-child(4) {
      animation: up 5s linear infinite 3s;
    }
    &:nth-child(5) {
      animation: up 5s linear infinite 4s;
    }
  }
  @keyframes up {
    0% {
      font-size: 0px;
      opacity: 0;
      margin-top: 0px;
    }
    3% {
      opacity: 1;
    }
    5% {
      font-size: inherit;
      opacity: 1;
      margin-top: 0px;
    }
    20% {
      font-size: inherit;
      opacity: 1;
      margin-top: 0px;
    }
    27% {
      font-size: 0px;
      opacity: 0.5;
      margin-top: 100px;
    }
    100% {
      font-size: 0px;
      opacity: 0;
      margin-top: 0px;
    }
  }
`;
