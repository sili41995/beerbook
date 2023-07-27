import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { initialRecipeDetailsState } from './initialState';
import { statuses } from '../statuses';

const useRecipeDetails = create(
  devtools((set, get) => ({
    ...initialRecipeDetailsState,
    resetState: () => {
      set({
        ...initialRecipeDetailsState,
      });
    },
    incrementPage: () => {
      set({ page: get().page + 1 });
    },
    fetchRecipes: async () => {
      set({ status: statuses.pending, error: null });
      try {
        const response = await fetch(
          `https://api.punkapi.com/v2/beers?page=${get().page}`
        );
        if (!response.ok) {
          throw new Error('Failed to loading! Please, try again!');
        }
        const data = await response.json();
        if (!data.length) {
          set({ lastPage: true, status: statuses.resolved });
          return;
        }
        set({ recipes: data, status: statuses.resolved });
      } catch (error) {
        set({ error: error.message, status: statuses.rejected });
      }
    },
  }))
);

export default useRecipeDetails;
