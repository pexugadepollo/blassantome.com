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
  position: relative;
  display: flex;
  justify-content: center;
  transition:all .5s ease-in-out
`;

export const BottomButtomBar = styled.div`
  position: absolute;
  min-height: 35px;
  bottom: -22.5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


