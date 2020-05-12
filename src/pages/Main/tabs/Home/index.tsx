import React, { FC, useEffect } from "react";
import { useTab } from "../../../../hooks/useTab";

const Home: FC = () => {
  const { setTab } = useTab();
  useEffect(() => {
    setTab(2);
  }, [setTab]);
  return <div></div>;
};
console.log(Home);
export default Home;
