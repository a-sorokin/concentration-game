import { Sidebar } from "components/Sidebar";
import { Layout } from "layout/Layout";
import { Field } from "components/Filed/Field";
import React, { useEffect, useState } from "react";
import { useAppStore } from "store/store";

export const FieldPage: React.FC<{ size: number }> = ({ size }) => {
  const createField = useAppStore((state) => state.createField);
  const [isStared, setIsStared] = useState(false);

  useEffect(() => {
    createField(size);
    setIsStared(true);
  }, [createField, size]);

  if (!isStared) return null;
  return <Layout SidebarElement={Sidebar} FieldElement={Field} />;
};
