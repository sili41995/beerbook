import { devtools } from 'zustand/middleware';
import { create } from 'zustand';
import BASE_URL from 'services/baseUrl';
import { statuses } from 'store/statuses';

const useRecipes = create(
  devtools((set, get) => ({
    recipes: [],
    recipesIdToDelete: [],
    status: 'idle',
    error: null,
    page: 1,
    lastPage: false,
    incrementPage: () => {
      set({ page: get().page + 1 });
    },
    deleteRecipes: () => {
      const recipesIdToDelete = get().recipesIdToDelete;
      const recipes = get().recipes;

      set({
        recipes: [
          ...recipes.filter(({ id }) => !recipesIdToDelete.includes(id)),
        ],
        recipesIdToDelete: [],
      });
    },
    addRecipeIdToDeleteCollection: (recipeId) => {
      const recipesIdToDelete = get().recipesIdToDelete;

      if (recipesIdToDelete.includes(recipeId)) {
        set({
          recipesIdToDelete: [
            ...get().recipesIdToDelete.filter((id) => id !== recipeId),
          ],
        });
        return;
      }

      const allRecipes = get().recipes;
      const { id: recipeIdToDelete } = allRecipes.find(
        ({ id }) => id === recipeId
      );
      set({
        recipesIdToDelete: [...get().recipesIdToDelete, recipeIdToDelete],
      });
    },
    fetchRecipes: async () => {
      set({ status: statuses.pending, error: null });
      try {
        const response = await fetch(`${BASE_URL}?page=${get().page}`);
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

export default useRecipes;
