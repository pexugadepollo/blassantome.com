import React, { FC, useEffect } from "react";
import { Spinner } from "../../../../components/Spinner/styles";
import * as SC from './style'
import { useTab } from "../../../../hooks/useTab";

const Home: FC = () => {
  const { setTab } = useTab();
  useEffect(()=>{
    setTab(2)
  }, [setTab])
  return (
    <SC.AnimatedText>
      <p>Hola</p>
      <p>Soy Blas</p>
      <p>Un mesaje</p>
      <p>Otro mensaje</p>
      <p>Otro mas</p>
    </SC.AnimatedText>
  );
};
console.log(Home);
export default Home;
