import s from "./History.module.scss";
import { useAppStore } from "store/store";
import { formatTime } from "store/utils";

export const History = () => {
  const attemptsHistory = useAppStore((state) => state.attemptsHistory);

  return (
    <div className={s.history}>
      <div>Attempts:</div>
      {attemptsHistory.map((attempt, index) => (
        <div key={index}>{formatTime(attempt)}</div>
      ))}
    </div>
  );
};
