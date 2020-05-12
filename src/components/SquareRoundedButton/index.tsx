import React, { FC } from 'react';
import * as SC from './style'

interface SquareRoundedButtonProps {
    type?: "button" | "submit" | "reset" | undefined,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    children: string
}

const SquareRoundedButton:FC<SquareRoundedButtonProps> = ({children, type, onClick}) => {
    return(
        <SC.CustomButton type={type} onClick={onClick}>
            {children}
        </SC.CustomButton>
    );
}

export default SquareRoundedButton;