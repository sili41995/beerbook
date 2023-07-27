import BASE_URL from './baseUrl';

function fetchRecipeById(id) {
  return fetch(`${BASE_URL}/${id}`).then((response) => {
    if (!response.ok) {
      throw new Error("We're sorry, but recipe not found.");
    }
    return response.json();
  });
}

export default fetchRecipeById;
