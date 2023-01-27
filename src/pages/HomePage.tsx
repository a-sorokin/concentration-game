import { Sidebar } from "components/Sidebar";
import { Layout } from "layout/Layout";
import { SelectFieldSize } from "components/SelectFieldSize/SelectFieldSize";

export const HomePage = () => (
  <Layout SidebarElement={Sidebar} FieldElement={SelectFieldSize} />
);
