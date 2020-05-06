import React, { FC } from "react";
import * as SC from "./styles";

interface CircleButtonProps {
  icon: React.ReactElement;
  primary?: boolean;
  onClick?: () => void;
}

const CircleButton: FC<CircleButtonProps> = ({ icon, primary, onClick }) => {
  return (
    <SC.ButtomContainer onClick={onClick} primary={primary}>
      {icon}
    </SC.ButtomContainer>
  );
};

export default CircleButton;
