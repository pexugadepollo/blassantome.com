import React, { FC } from "react";
import * as SC from './style'
import { CheckCircleOutlined } from "@ant-design/icons";


interface ModalInterface {
  open: boolean,
  body?: string,
}

const SnackContainer: FC<ModalInterface> = ({ body, open }) => {
  return (
  <SC.SnackContainer open={open}>
    <CheckCircleOutlined style={{color: '#1890ff', fontSize: '30px'}}/>
  <span>{body}</span>
  </SC.SnackContainer>);
};

export default SnackContainer;
