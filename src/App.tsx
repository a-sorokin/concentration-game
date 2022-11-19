import s from "./layout.module.scss";
import { Timer } from "components/Timer/Timer";
import { Field } from "components/Filed/Field";
import { History } from "components/History/History";
import classNames from "classnames";
import { SelectFieldSize } from "components/SelectFieldSize/SelectFieldSize";
import { useAppStore } from "store/store";

export const App = () => {
  const isStarted = useAppStore((state) => state.isStarted);
  return (
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
        {isStarted ? <Field /> : <SelectFieldSize />}
      </div>
    </div>
  );
};
