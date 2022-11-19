import s from "./layout.module.scss";
import { Timer } from "components/Timer/Timer";
import { Field } from "components/Filed/Field";
import { History } from "components/History/History";
import classNames from "classnames";
import { SelectFieldSize } from "components/SelectFieldSize/SelectFieldSize";

export const App = () => (
  <div className={classNames("App", s.layout)}>
    <div className={s.sidebar}>
      <div className={s.sidebarElement}>
        <Timer />
      </div>
      <div className={s.sidebarElement}>
        <History />
      </div>
    </div>
    <div className={s.field}>
      <SelectFieldSize />
      <Field />
    </div>
  </div>
);
