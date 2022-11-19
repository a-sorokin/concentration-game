import { FC } from "react";
import { TCard } from "store/types";
import s from "./Card.module.scss";

export const Card: FC<{ card: TCard }> = ({ card }) => {
  return (
    <div className={s.card}>
      <img
        src={`data:image/svg+xml;base64,${btoa(card.img)}`}
        alt="Card image"
      />
    </div>
  );
};
