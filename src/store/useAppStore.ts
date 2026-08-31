import { create } from 'zustand';

interface AppState {
  userId: string | null;
  setUserId: (id: string) => void;
  clearUserId: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  userId: null,
  setUserId: (id: string) => set({ userId: id }),
  clearUserId: () => set({ userId: null }),
}));
