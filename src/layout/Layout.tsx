import s from "layout/layout.module.scss";
import React, { FC } from "react";

type TProps = {
  SidebarElement: FC;
  FieldElement: FC;
  TopElement?: FC;
};

export const Layout: React.FC<TProps> = ({
  SidebarElement,
  FieldElement,
  TopElement,
}) => (
  <div>
    <div className={s.sidebar}>
      <SidebarElement />
    </div>
    {TopElement && (
      <div className={s.top}>
        <TopElement />
      </div>
    )}
    <div className={s.field}>
      <FieldElement />
    </div>
  </div>
);
