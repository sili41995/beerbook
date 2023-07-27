import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';

const NotFound = lazy(() => import('./NotFound/NotFound'));
const About = lazy(() => import('../pages/About'));
const RecipeDetails = lazy(() => import('../pages/RecipeDetails'));
const Recipes = lazy(() => import('../pages/Recipes'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Recipes link={'recipes/'} />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipes/:recipeId" element={<RecipeDetails />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
