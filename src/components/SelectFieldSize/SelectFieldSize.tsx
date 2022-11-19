import s from "./SelectFieldSize.module.scss";
import { useAppStore } from "store/store";

export const SelectFieldSize = () => {
  const createField = useAppStore((state) => state.createField);

  return (
    <div className={s.selector}>
      <h2>Field size:</h2>

      <div>
        <button onClick={() => createField(4)}>Small</button>
        <button onClick={() => createField(6)}>Medium</button>
        <button onClick={() => createField(8)}>Big</button>
      </div>
    </div>
  );
};
