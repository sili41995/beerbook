import { Link, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import RecipeListItem from 'components/RecipeListItem';
import useRecipes from 'store/recipes/store';
import { Item, List } from './RecipesList.styled';
import {
  selectAddRecipeIdToDeleteCollection,
  selectRecipes,
  selectRecipesIdToDelete,
} from 'store/recipes/selectors';

const RecipesList = ({ link }) => {
  const location = useLocation();
  const recipes = useRecipes(selectRecipes);
  const addRecipeIdToDeleteCollection = useRecipes(
    selectAddRecipeIdToDeleteCollection
  );
  const recipesIdToDelete = useRecipes(selectRecipesIdToDelete);

  const recipesToRender = recipes.slice(0, 15);

  const addRecipeNotify = () => toast.success('Recipe add to delete list');
  const removeRecipeNotify = () =>
    toast.error('Recipe remove from delete list');

  const handleContextMenu = (e, id) => {
    e.preventDefault();
    addRecipeIdToDeleteCollection(id);
    if (recipesIdToDelete.includes(id)) {
      removeRecipeNotify();
      return;
    }
    addRecipeNotify();
  };

  return (
    <>
      <List>
        {recipesToRender.map((recipe) => (
          <Item
            key={recipe.id}
            onContextMenu={(e) => {
              handleContextMenu(e, recipe.id);
            }}
          >
            <Link to={`${link}${recipe.id}`} state={{ from: location }}>
              <RecipeListItem recipe={recipe} />
            </Link>
          </Item>
        ))}
      </List>
      <Toaster />
    </>
  );
};

export default RecipesList;
