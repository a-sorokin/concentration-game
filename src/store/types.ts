export type TCard = {
  id: string;
  status: "opened" | "closed";
  isPaired: boolean;
};

export type TField = TCard[][];
