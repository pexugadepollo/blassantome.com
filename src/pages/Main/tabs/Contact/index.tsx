import React, { FC, useEffect } from "react";
import { useTab } from "../../../../hooks/useTab";

const Contact: FC = () => {
  const { setTab } = useTab();
  useEffect(()=>{
    setTab(3)
  }, [setTab])
  return <div>contacto</div>;
};

export default Contact;
