import { SavedNews } from '@/tipos';
import { create } from 'zustand';

type SavedNewsStore = {
  savedNews: SavedNews[] | null;
  isDeleting: boolean;
  deleteSavedNews: (id: string) => void;
  setIsDeleting: (isDeleting: boolean) => void;
  setSavedNews: (savedNews: SavedNews[] | null) => void;
};

export const useSavedNewsStore = create<SavedNewsStore>((set) => ({
  savedNews: null,
  isDeleting: false,
  deleteSavedNews: (id: string) =>
    set((state) => ({
      savedNews: state.savedNews
        ? state.savedNews.filter((savedNews) => savedNews.id !== id)
        : null,
    })),
  setIsDeleting: (isDeleting: boolean) => set({ isDeleting }),
  setSavedNews: (savedNews: SavedNews[] | null) => set({ savedNews }),
}));
