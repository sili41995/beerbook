import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import RecipeListItem from 'components/RecipeListItem';
import { Link } from 'react-router-dom';
import {
  selectAddRecipeIdToDeleteCollection,
  selectRecipesIdToDelete,
} from 'store/selectors';
import useRecipes from 'store/store';
import { Item, List } from './RecipesLazyList.styled';
import { useEffect, useRef, useState } from 'react';

const addRecipeNotify = () => toast.success('Recipe add to delete list');
const removeRecipeNotify = () => toast.error('Recipe remove from delete list');

const RecipesLazyList = ({ recipes, link }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [step] = useState(5);
  const [recipesToRender, setRecipesToRender] = useState([]);
  const [stopObserve, setStopObserve] = useState(false);
  const location = useLocation();
  const guardRef = useRef();
  const addRecipeIdToDeleteCollection = useRecipes(
    selectAddRecipeIdToDeleteCollection
  );
  const recipesIdToDelete = useRecipes(selectRecipesIdToDelete);

  const handleContextMenu = (e, id) => {
    e.preventDefault();
    addRecipeIdToDeleteCollection(id);
    if (recipesIdToDelete.includes(id)) {
      removeRecipeNotify();
      return;
    }
    addRecipeNotify();
  };

  useEffect(() => {
    if (!recipesToRender.length && stopObserve) {
      setStartIndex((index) => index - step);
    }
  }, [recipesToRender, step, stopObserve]);

  useEffect(() => {
    setRecipesToRender(
      recipes.filter(
        (_, index) => index >= startIndex && index <= startIndex + 4
      )
    );
  }, [recipes, startIndex]);

  useEffect(() => {
    if (!stopObserve) {
      const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (recipesToRender.length && entry.isIntersecting) {
            if (
              recipesToRender[recipesToRender.length - 1]?.id ===
              recipes[recipes.length - 1].id
            ) {
              observer.unobserve(entry.target);
              setStopObserve(true);
              return;
            }
            window.scrollTo(0, 0);
            setStartIndex((index) => index + step);

            console.log(recipesToRender[recipesToRender.length - 1]?.id);
            console.log(recipes[recipes.length - 1].id);
          }
        });
      };

      const options = {
        root: null,
        rootMargin: '0px',
      };

      const observer = new IntersectionObserver(intersectionCallback, options);
      const { current: currentGuardRef } = guardRef;
      if (currentGuardRef) {
        observer.observe(currentGuardRef);
      }

      return () => {
        if (currentGuardRef) {
          observer.unobserve(currentGuardRef);
        }
      };
    }
  }, [recipes, recipesToRender, startIndex, step, stopObserve]);

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
      <div ref={guardRef}></div>
    </>
  );
};

export default RecipesLazyList;
