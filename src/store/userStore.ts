import { create } from "zustand";

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increase: (number) => {
    set((state) => ({ bears: state.bears + number }));
  },
}));

export default useBearStore;
