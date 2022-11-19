import { TField } from "store/types";

export const createField = (size: [number, number]): TField => {
  const [rows, columns] = size;
  const field: TField = [];
  for (let i = 0; i < rows; i++) {
    field.push([]);
    for (let j = 0; j < columns; j++) {
      field[i].push({
        id: `${i}-${j}`,
        status: "closed",
        isPaired: false,
      });
    }
  }

  return field;
};
