import React, { FC } from "react";
import * as SC from "./style";

interface TextInputProps {
  value: string;
  error?: string;
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextInput: FC<TextInputProps> = ({
  value,
  error,
  label,
  name,
  onChange,
}) => {
  return (
    <SC.InputContainer>
      <SC.CustomLabel>{label}</SC.CustomLabel>
      <SC.CustomTextArea
        rows={10}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
      <SC.ErrorMessage>{error}</SC.ErrorMessage>
    </SC.InputContainer>
  );
};

export default TextInput;
