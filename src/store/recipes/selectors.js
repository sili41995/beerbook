export const selectFetchRecipes = (state) => state.fetchRecipes;

export const selectRecipes = (state) => state.recipes;

export const selectStatus = (state) => state.status;

export const selectIncrementPage = (state) => state.incrementPage;

export const selectError = (state) => state.error;

export const selectAddRecipeIdToDeleteCollection = (state) =>
  state.addRecipeIdToDeleteCollection;

export const selectRecipesIdToDelete = (state) => state.recipesIdToDelete;

export const selectDeleteRecipes = (state) => state.deleteRecipes;

export const selectLastPage = (state) => state.lastPage;
