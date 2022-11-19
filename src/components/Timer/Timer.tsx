import { useEffect, useState } from "react";
import s from "./Timer.module.scss";
import { useAppStore } from "store/store";

const formatTimeNumber = (time: number) => (time < 10 ? `0${time}` : time);
const formatTime = (time: number) => {
  const mm = formatTimeNumber(Math.floor(time / 60000));
  const ss = formatTimeNumber(Math.floor((time % 60000) / 1000));
  const ms = formatTimeNumber(Math.floor((time % 1000) / 10));
  return `${mm}:${ss}:${ms}`;
};

export const Timer = () => {
  const isStarted = useAppStore((state) => state.isStarted);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: number | null = null;
    if (isStarted) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isStarted]);

  return <div className={s.timer}>{formatTime(time)}</div>;
};
