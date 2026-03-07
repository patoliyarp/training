import { create } from "zustand";

const useCounter = create((set) => ({
  value: 0,
  increase: () => set((state) => ({ value: state.value + 1 })),
  decrease: () => set((state) => ({ value: state.value - 1 })),
  update: (newVal) => set((state) => ({ value: state.value + newVal })),
}));

export default useCounter;
