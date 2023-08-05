import { create } from "zustand";

export const useStore = create((set) => ({
  user: null,
  isOpen: false,
  openSidebar: () => set({ isOpen: true }),
  closeSidebar: () => set({ isOpen: false }),
}));
