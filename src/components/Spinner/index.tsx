import React, { FC } from "react";
import * as SC from "./styles";

const Spinner: FC = () => {
  return (
    <SC.SpinnerContainer>
      <SC.Spinner>
        <div></div>
        <div></div>
      </SC.Spinner>
    </SC.SpinnerContainer>
  );
};

export default Spinner;
