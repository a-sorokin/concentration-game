import { useAppStore } from "store/store";
import s from "./Field.module.scss";
import { Card } from "components/Card/Card";

export const Field = () => {
  const field = useAppStore((state) => state.field);

  return (
    <div className={s.field}>
      {field.map((row, i) => (
        <div key={`row-${i}`} className={s.row}>
          {row.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      ))}
    </div>
  );
};
