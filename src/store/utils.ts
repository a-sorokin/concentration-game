import { TField } from "store/types";
import { getRandomAvatar } from "@fractalsoftware/random-avatar-generator";

const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getImagesArray = (count: number): { img: string; id: number }[] => {
  const images = [];
  for (let i = 0; i < count; i++) {
    const img = getRandomAvatar();
    images.push({ img, id: i });
    images.push({ img, id: i });
  }
  return shuffle(images);
};

export const createField = (size: [number, number]): TField => {
  const imgCount = (size[0] * size[1]) / 2;
  const images = getImagesArray(imgCount);

  const [rows, columns] = size;
  const field: TField = [];
  for (let i = 0; i < rows; i++) {
    field.push([]);
    for (let j = 0; j < columns; j++) {
      const img = images.pop() as { img: string; id: number };
      field[i].push({
        id: `${i}-${j}`,
        status: "closed",
        isPaired: false,
        img: img.img,
        imgId: img.id,
      });
    }
  }

  return field;
};
