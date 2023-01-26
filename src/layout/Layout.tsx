import s from "layout/layout.module.scss";
import React, { FC } from "react";

type TProps = {
  SidebarElement: FC;
  FieldElement: FC;
};

export const Layout: React.FC<TProps> = ({ SidebarElement, FieldElement }) => (
  <div>
    <div className={s.sidebar}>
      <SidebarElement />
    </div>
    <div className={s.field}>{<FieldElement />}</div>
  </div>
);
