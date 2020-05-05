import React, { FC } from "react";
import * as SC from "./styles";

const Main: FC = () => {
  return (
      <div>
    <SC.Background/>
    <SC.MainContainer>
        <SC.Box>
            {/* <SC.AnimatedText>
                <p>Hola</p>
                <p>Soy Blas</p>
                <p>Un mesaje</p>
                <p>Otro mensaje</p>
                <p>Otro mas</p>
            </SC.AnimatedText> */}
            <SC.BottomButtomBar>
                
            </SC.BottomButtomBar>
        </SC.Box>
    </SC.MainContainer>
    </div>
  );
};

export default Main;
