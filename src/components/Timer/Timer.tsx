import { useEffect, useState } from "react";
import s from "./Timer.module.scss";
import { useAppStore } from "store/store";
import { formatTime } from "store/utils";

export const Timer = () => {
  const { isStarted, saveResult } = useAppStore((state) => ({
    isStarted: state.isStarted,
    saveResult: state.saveResult,
  }));
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: number | null = null;

    if (isStarted) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    if (time && !isStarted) {
      saveResult(time);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isStarted, saveResult, time]);

  return <div className={s.timer}>{formatTime(time)}</div>;
};
