import styled from 'styled-components'

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