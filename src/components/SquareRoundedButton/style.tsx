import styled from "styled-components";

export const CustomButton = styled.button`
  border-radius: 4px;
  padding: 7px;
  border: 1px solid #1890ff;
  color: #1890ff;
  background-color: #e6f7ff;
  transition: transform 0.5s ease-in-out;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  &:hover {
    /* border: 1px solid #e6f7ff;
    color: #e6f7ff;
    background-color: #1890ff; */
    transform: scale(1.1);
  }
`;
