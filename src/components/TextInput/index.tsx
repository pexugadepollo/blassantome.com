import React, { FC } from "react";
import * as SC from "./style";

interface TextInputProps {
  name: string;
  value: string;
  error?: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
      <SC.CustomInput
        type="text"
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
