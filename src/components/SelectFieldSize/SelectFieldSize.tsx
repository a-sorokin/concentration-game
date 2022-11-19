import s from "./SelectFieldSize.module.scss";
import { useAppStore } from "store/store";

export const SelectFieldSize = () => {
  const createField = useAppStore((state) => state.createField);

  return (
    <div className={s.selector}>
      <h2>Field size:</h2>

      <div>
        <button onClick={() => createField(6)}>Small</button>
        <button onClick={() => createField(10)}>Medium</button>
        <button onClick={() => createField(16)}>Big</button>
      </div>
    </div>
  );
};
