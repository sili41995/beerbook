import { createPortal } from 'react-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from './DeleteButton.styled';
import useRecipes from 'store/store';
import { selectDeleteRecipes } from 'store/selectors';

const DeleteButton = () => {
  const deleteRecipes = useRecipes(selectDeleteRecipes);

  const notify = () => toast.success('Recipes have been deleted');

  const handleBtnClick = () => {
    deleteRecipes();
    notify();
  };

  return createPortal(
    <>
      <Button type="button" onClick={handleBtnClick}>
        Delete
      </Button>
      <Toaster />
    </>,
    document.querySelector('#button-root')
  );
};

export default DeleteButton;
