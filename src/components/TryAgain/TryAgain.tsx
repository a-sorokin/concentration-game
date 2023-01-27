import { useAppStore } from "store/store";
import s from "./TryAgain.module.scss";
import { useLinkClickHandler } from "react-router-dom";
import { ROUTES } from "routes/Routes";

export const TryAgain = () => {
  const isFinished = useAppStore((state) => state.isFinished);
  const handleClick = useLinkClickHandler(ROUTES.HOME);

  if (!isFinished) return null;
  return (
    <div className={s.tryAgain}>
      <div>Congratulations!</div>
      <div>You have completed the game!</div>

      <button
        onClick={(event) => {
          if (!event.defaultPrevented) {
            // @ts-expect-error
            handleClick(event);
          }
        }}
      >
        Try again
      </button>
    </div>
  );
};
