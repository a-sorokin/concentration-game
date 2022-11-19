export type TCard = {
  id: string;
  status: "opened" | "closed";
  isPaired: boolean;
  img: string;
  imgId: number;
};

export type TField = TCard[][];
