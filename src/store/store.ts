import create from "zustand";
import { TField } from "store/types";
import {
  createField,
  getAttemptsHistory,
  getCoordinates,
  saveAttemptsHistory,
} from "store/utils";

interface TState {
  isStarted: boolean;
  field: TField;
  alreadyOpenedCards: Set<string>;
  attemptsHistory: number[];

  createField: (size: number) => void;
  openCard: (id: string) => void;
  checkPair: () => void;
  checkWin: () => void;
  saveResult: (result: number) => void;
  setIsStarted: (isStarted: boolean) => void;
}

export const useAppStore = create<TState>((set, get) => ({
  isStarted: false,
  field: [],
  alreadyOpenedCards: new Set(),
  attemptsHistory: getAttemptsHistory(),

  createField: (size: number) => {
    set({ field: createField([size, size]) });
  },
  openCard: (id: string) => {
    set((state) => {
      const [y, x] = getCoordinates(id);
      const newField = [...state.field];
      newField[y][x].status = "opened";
      state.alreadyOpenedCards.add(id);
      return {
        field: newField,
        alreadyOpenedCards: state.alreadyOpenedCards,
        isStarted: true,
      };
    });
    get().checkPair();
  },
  checkPair: () => {
    const { alreadyOpenedCards, field } = get();
    if (alreadyOpenedCards.size < 2) return;

    const iterator = alreadyOpenedCards.values();
    const firstCardId = iterator.next().value;
    const secondCardId = iterator.next().value;
    const [y1, x1] = getCoordinates(firstCardId);
    const [y2, x2] = getCoordinates(secondCardId);

    const newField = [...field];

    if (field[y1][x1].imgId === field[y2][x2].imgId) {
      newField[y1][x1].isPaired = true;
      newField[y2][x2].isPaired = true;
    }
    if (alreadyOpenedCards.size > 2) {
      newField[y1][x1].status = "closed";
      newField[y2][x2].status = "closed";
      alreadyOpenedCards.delete(firstCardId);
      alreadyOpenedCards.delete(secondCardId);
    }

    set(() => ({ field: newField, alreadyOpenedCards }));
    get().checkWin();
  },
  checkWin: () => {
    const { field } = get();
    const isWin = field.every((row) => row.every((card) => card.isPaired));
    if (isWin) {
      set({ isStarted: false });
    }
  },
  saveResult: (result: number) => {
    set((state) => {
      const newHistory = [...state.attemptsHistory, result];
      saveAttemptsHistory(newHistory);
      return { attemptsHistory: newHistory };
    });
  },
  setIsStarted: (isStarted: boolean) => set({ isStarted }),
}));
