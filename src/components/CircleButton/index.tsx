import React, { FC } from "react";
import * as SC from "./styles";

interface CircleButtonProps {
  icon: React.ReactElement;
  primary?: boolean;
  buttonPosition?: number;
  onClick?: () => void;
  style?: {};
}

const CircleButton: FC<CircleButtonProps> = ({ icon, primary, onClick, style, buttonPosition }) => {
  return (
    <SC.BaseComponent buttonPosition={buttonPosition}>
    <SC.ButtomContainer style={style} onClick={onClick} primary={primary}>
      {icon}
    </SC.ButtomContainer>
    </SC.BaseComponent>

  );
};

export default CircleButton;
