import { FC, useCallback, useMemo } from "react";
import { TCard } from "store/types";
import s from "./Card.module.scss";
import { useAppStore } from "store/store";
import { useSpring, a } from "@react-spring/web";
import clsx from "clsx";

export const Card: FC<{ card: TCard }> = ({ card }) => {
  const isOpened = useMemo(
    () => card.status === "opened" || card.isPaired,
    [card.status]
  );
  const isPaired = useMemo(() => card.isPaired, [card.isPaired]);
  const openCard = useAppStore((state) => state.openCard);
  const openHandler = useCallback(() => openCard(card.id), [card.id]);

  const { transform, opacity } = useSpring({
    config: { mass: 5, tension: 500, friction: 80 },
    opacity: isOpened ? 0 : 1,
    transform: `perspective(500px) rotateY(${isOpened ? 180 : 0}deg)`,
  });

  return (
    <div className={s.card} onClick={openHandler}>
      <a.div
        className={clsx(s.cardImage, isPaired && s.paired)}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      >
        <img
          src={`data:image/svg+xml;base64,${btoa(card.img)}`}
          alt="Card image"
        />
      </a.div>

      <a.div
        className={clsx(s.cardImage, s.cardBack)}
        style={{ opacity, transform, rotateX: "180deg" }}
      />
    </div>
  );
};
