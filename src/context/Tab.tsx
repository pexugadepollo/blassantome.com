import React, { createContext, useMemo, useState } from "react";

export interface TabContextInterface {
  tabSelected: number;
  setTab: (tabSelected: number) => void;
}

export const TabContext = createContext<TabContextInterface | null>(null);

export const TabProvider: React.FC = ({ children }) => {
  const [tabSelected, setTab] = useState(2);

  const memorizedContext = useMemo(
    () => ({
      tabSelected,
      setTab,
    }),
    [tabSelected, setTab]
  );

  return (
    <TabContext.Provider value={memorizedContext}>
      {children}
    </TabContext.Provider>
  );
};
