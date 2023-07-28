import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import DeleteButton from 'components/DeleteButton';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import RecipesList from 'components/RecipesList';
import {
  selectError,
  selectFetchRecipes,
  selectIncrementPage,
  selectLastPage,
  selectRecipes,
  selectStatus,
  selectRecipesIdToDelete,
} from 'store/selectors';
import useRecipes from 'store/store';
import { statuses } from 'store/statuses';

const notifyError = () =>
  toast.error("We're sorry, but you've reached the last page.");

const Recipes = ({ link = '' }) => {
  const recipesIdToDelete = useRecipes(selectRecipesIdToDelete);
  const fetchRecipes = useRecipes(selectFetchRecipes);
  const recipes = useRecipes(selectRecipes);
  const status = useRecipes(selectStatus);
  const incrementPage = useRecipes(selectIncrementPage);
  const error = useRecipes(selectError);
  const lastPage = useRecipes(selectLastPage);

  useEffect(() => {
    if (lastPage) {
      notifyError();
    }
  }, [lastPage]);

  useEffect(() => {
    if (!recipes.length && status === statuses.resolved && !lastPage) {
      incrementPage();
    }
  }, [incrementPage, lastPage, recipes, status]);

  useEffect(() => {
    if (!!recipes.length) {
      return;
    }
    fetchRecipes();
  }, [fetchRecipes, recipes]);

  return (
    <>
      {status === statuses.resolved && (
        <>
          <RecipesList recipes={recipes} link={link} />
          {!!recipesIdToDelete.length && <DeleteButton />}
        </>
      )}
      {status === statuses.rejected && <ErrorMessage error={error} />}
      {status === statuses.pending && <Loader />}
      {lastPage && <Toaster />}
    </>
  );
};

export default Recipes;
