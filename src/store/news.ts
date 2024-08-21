import { CommentOnPost, News } from '@/tipos';
import { create } from 'zustand';

type NewsStore = {
  news: News | null;
  isDeleting: boolean;
  clearNews: () => void;
  deleteCommentFromNews: (id: string) => void;
  setIsDeleting: (isDeleting: boolean) => void;
  setNews: (news: News | null) => void;
};

export const useNewsStore = create<NewsStore>((set) => ({
  news: null,
  isDeleting: false,
  clearNews: () => set({ news: null }),
  deleteCommentFromNews: (id: string) =>
    set((state) => ({
      news: state.news
        ? {
            ...state.news,
            comments: state.news.comments.filter(
              (comment: CommentOnPost) => comment.id !== id,
            ),
          }
        : state.news,
    })),

  setIsDeleting: (isDeleting: boolean) => set({ isDeleting }),

  setNews: (news: News | null) => set({ news }),
}));
