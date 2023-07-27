import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useParams } from 'react-router-dom';
import ErrorMessage from 'components/ErrorMessage';
import GoBackLink from 'components/GoBackLink';
import Loader from 'components/Loader';
import RecipeInfo from 'components/RecipeInfo';
import {
  selectFetchRecipes,
  selectIncrementPage,
  selectPage,
  selectLastPage,
  selectRecipes,
  selectStatus,
  selectResetState,
  selectError,
} from 'store/recipeDetails/selectors';
import useRecipeDetails from 'store/recipeDetails/store';
import { statuses } from 'store/statuses';

const notify = () => toast.error("We're sorry, but recipe not found.");

const RecipeDetails = () => {
  const fetchRecipes = useRecipeDetails(selectFetchRecipes);
  const recipes = useRecipeDetails(selectRecipes);
  const status = useRecipeDetails(selectStatus);
  const page = useRecipeDetails(selectPage);
  const lastPage = useRecipeDetails(selectLastPage);
  const resetState = useRecipeDetails(selectResetState);
  const incrementPage = useRecipeDetails(selectIncrementPage);
  const error = useRecipeDetails(selectError);
  const location = useLocation();
  const { recipeId } = useParams();
  const recipe = recipes.find(({ id }) => id === Number(recipeId));
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    return () => {
      resetState();
    };
  }, [resetState]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes, page]);

  useEffect(() => {
    if (!recipe && status === statuses.resolved && !lastPage) {
      incrementPage();
    }
  }, [incrementPage, lastPage, recipe, status]);

  useEffect(() => {
    if (lastPage) {
      notify();
    }
  }, [lastPage]);

  return (
    <>
      <GoBackLink backLink={backLink} />
      {status === statuses.pending && <Loader />}
      {recipe && status === statuses.resolved && <RecipeInfo recipe={recipe} />}
      {status === statuses.rejected && <ErrorMessage error={error} />}
      {lastPage && !recipe && status === statuses.resolved && <Toaster />}
    </>
  );
};

export default RecipeDetails;
