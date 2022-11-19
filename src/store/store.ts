import create from "zustand";
import { TField } from "store/types";
import { createField } from "store/utils";

interface TState {
  isStarted: boolean;
  field: TField;

  createField: (size: number) => void;
}

export const useAppStore = create<TState>((set) => ({
  isStarted: false,
  field: [],

  createField: (size: number) => {
    set({
      field: createField([size, size]),
      isStarted: true,
    });


    console.log(createField([size, size]));
  },
}));
