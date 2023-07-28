import { Toaster } from 'react-hot-toast';
import useRecipes from 'store/store';
import { selectRecipes } from 'store/selectors';
import RecipesLazyList from 'components/RecipesLazyList';

const RecipesList = ({ link }) => {
  const recipes = useRecipes(selectRecipes);

  const recipesToRender = recipes.filter(
    (_, index) => index >= 0 && index <= 14
  );

  return (
    <>
      <RecipesLazyList recipes={recipesToRender} link={link} />
      <Toaster />
    </>
  );
};

export default RecipesList;
