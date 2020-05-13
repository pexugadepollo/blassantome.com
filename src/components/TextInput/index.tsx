import React, { FC } from "react";
import * as SC from "./style";

interface TextInputProps {
  name: string;
  value: string;
  error?: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const TextInput: FC<TextInputProps> = ({
  value,
  error,
  label,
  name,
  onBlur,
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
        onBlur={onBlur}
        required
      />
      <SC.ErrorMessage>{error}</SC.ErrorMessage>
    </SC.InputContainer>
  );
};

export default TextInput;
