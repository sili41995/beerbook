import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useParams } from 'react-router-dom';
import GoBackLink from 'components/GoBackLink';
import Loader from 'components/Loader';
import RecipeInfo from 'components/RecipeInfo';
import { statuses } from 'store/statuses';
import fetchRecipeById from 'services/beerRecipesApi';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const notifyError = () => {
  toast.error("We're sorry, but recipe not found.");
};

const RecipeDetails = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(() => statuses.idle);
  const [recipe, setRecipe] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const { recipeId } = useParams();

  useEffect(() => {
    async function getRecipeById(id) {
      try {
        setStatus(statuses.pending);
        const recipe = await fetchRecipeById(id);
        setRecipe(...recipe);
        setStatus(statuses.resolved);
      } catch (error) {
        setError('Recipe not found');
        notifyError(error.message);
        setStatus(statuses.rejected);
      }
    }

    getRecipeById(recipeId);
  }, [recipeId]);

  return (
    <>
      <GoBackLink backLink={backLink} />
      {status === statuses.pending && <Loader />}
      {recipe && <RecipeInfo recipe={recipe} />}
      {status === statuses.rejected && <ErrorMessage error={error} />}
      <Toaster />
    </>
  );
};

export default RecipeDetails;
