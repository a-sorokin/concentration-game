import { Sidebar } from "components/Sidebar";
import { Layout } from "layout/Layout";
import { SelectFieldSize } from "components/SelectFieldSize/SelectFieldSize";
import React, { useEffect } from "react";
import { useAppStore } from "store/store";

export const HomePage = () => {
  const setIsStarted = useAppStore((state) => state.setIsStarted);

  useEffect(() => {
    setIsStarted(false);
  }, [setIsStarted]);

  return <Layout SidebarElement={Sidebar} FieldElement={SelectFieldSize} />;
};
