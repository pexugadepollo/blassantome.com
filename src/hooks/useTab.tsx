import { TabContext, TabContextInterface } from "../context/Tab";
import { useContext } from "react";

export function useTab(): TabContextInterface {
  const tabContext = useContext(TabContext);
  if (!tabContext) {
    throw new Error("Need context at tab context");
  }
  return tabContext;
}
