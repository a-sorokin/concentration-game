import { useAppStore } from "store/store";
import s from "./Field.module.scss";
import { Card } from "components/Card/Card";
import { useTrail, a } from "@react-spring/web";

const TRAIL_CONFIG = {
  config: { mass: 5, tension: 2000, friction: 200 },
  opacity: 1,
  x: 0,
  scale: 1,
  from: { opacity: 0, x: 20, scale: 0.9 },
};

export const Field = () => {
  const field = useAppStore((state) => state.field);

  const columnsTrail = useTrail(field.length, TRAIL_CONFIG);
  const rowsTrail = useTrail(field[0].length, TRAIL_CONFIG);

  return (
    <div className={s.field}>
      {columnsTrail.map(({ ...style }, i) => (
        <a.div key={`row-${i}`} style={style} className={s.row}>
          {rowsTrail.map(({ ...style }, j) => (
            <a.div key={field[i][j].id} style={style} className={s.row}>
              <Card card={field[i][j]} />
            </a.div>
          ))}
        </a.div>
      ))}
    </div>
  );
};
