import styled from "styled-components";

interface ModalInterface {
  open: boolean;
}

export const SnackContainer = styled.div<ModalInterface>`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: ${(props) => (props.open ? "flex" : "none")};
  background-color: #e6f7ff;
  border: 1px solid #1890ff;
  color: #1890ff;
  font-weight: 600;
  align-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 15px 20px;
  min-width: 200px;
  min-height: 20px; 
  animation: appear 1s;
  @keyframes appear {
    from{
      left: -300px;
    }
    to{
      left: 20px;
    }
  }
  & span{
    margin-left: 10px;
  }

`;
