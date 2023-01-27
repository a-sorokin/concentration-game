import { Sidebar } from "components/Sidebar";
import { Layout } from "layout/Layout";
import { Field } from "components/Filed/Field";
import React, { useEffect, useState } from "react";
import { useAppStore } from "store/store";
import { TryAgain } from "components/TryAgain/TryAgain";

const FieldPages: React.FC<{ size: number }> = ({ size }) => {
  const createField = useAppStore((state) => state.createField);
  const [isStared, setIsStared] = useState(false);

  useEffect(() => {
    createField(size);
    setIsStared(true);
  }, [createField, size]);

  if (!isStared) return null;
  return (
    <Layout
      SidebarElement={Sidebar}
      TopElement={TryAgain}
      FieldElement={Field}
    />
  );
};

export const SmallFieldPage = () => <FieldPages size={4} />;
export const MediumFieldPage = () => <FieldPages size={6} />;
export const BigFieldPage = () => <FieldPages size={8} />;
