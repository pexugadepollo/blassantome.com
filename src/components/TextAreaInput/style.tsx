import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  flex-direction: column;
  min-width: 100%;
`;

export const CustomTextArea = styled.textarea`
  font-size: 0.75rem;
  padding: 0.75rem 0.5rem;
  border-radius: 4px;
  outline: none;
  transition: box-shadow 200ms ease-in-out 0ms;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(240, 240, 240);
  border-image: initial;
  resize: none;
  &:focus {
    box-shadow: 0px 0px 0px 3px rgba(230, 247, 255, 1);
  }
`;

export const CustomLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
`;

export const ErrorMessage = styled.strong`
  color: rgb(250, 51, 45);
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;
