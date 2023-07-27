import { createPortal } from 'react-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from './DeleteButton.styled';
import useRecipes from 'store/store';
import { selectDeleteRecipes, selectRecipesIdToDelete } from 'store/selectors';

const DeleteButton = () => {
  const recipesIdToDelete = useRecipes(selectRecipesIdToDelete);
  const deleteRecipes = useRecipes(selectDeleteRecipes);

  const notify = () => toast.success('Recipes have been deleted');

  const handleBtnClick = () => {
    deleteRecipes();
    notify();
  };

  return createPortal(
    <>
      <Button
        type="button"
        disabled={!recipesIdToDelete.length}
        onClick={handleBtnClick}
      >
        Delete
      </Button>
      <Toaster />
    </>,
    document.querySelector('#button-root')
  );
};

export default DeleteButton;
