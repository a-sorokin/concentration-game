import s from "./SelectFieldSize.module.scss";
import { useLinkClickHandler } from "react-router-dom";
import { ROUTES } from "routes/Routes";

export const SelectFieldSize = () => {
  const handleClickSmall = useLinkClickHandler(ROUTES.SMALL);
  const handleClickMedium = useLinkClickHandler(ROUTES.MEDIUM);
  const handleClickBig = useLinkClickHandler(ROUTES.BIG);

  return (
    <div className={s.selector}>
      <h2>Field size:</h2>

      <div>
        <button
          onClick={(event) => {
            if (!event.defaultPrevented) {
              // @ts-expect-error
              handleClickSmall(event);
            }
          }}
        >
          Small
        </button>
        <button
          onClick={(event) => {
            if (!event.defaultPrevented) {
              // @ts-expect-error
              handleClickMedium(event);
            }
          }}
        >
          Medium
        </button>
        <button
          onClick={(event) => {
            if (!event.defaultPrevented) {
              // @ts-expect-error
              handleClickBig(event);
            }
          }}
        >
          Big
        </button>
      </div>
    </div>
  );
};
