import s from "./Timer.module.scss";
import { useAppStore } from "store/store";
import { formatTime } from "store/utils";

export const Timer = () => {
  const timer = useAppStore((state) => state.timer);
  return <div className={s.timer}>{formatTime(timer)}</div>;
};
