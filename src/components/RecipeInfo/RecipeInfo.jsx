import defaultRecipeImage from '../default-recipe-image.png';
import { Card, Image, List, Subtitle } from './RecipeInfo.styled';

const RecipeInfo = ({ recipe }) => {
  const {
    name,
    description,
    image_url: imageURL,
    abv,
    attenuation_level: attenuationLevel,
    brewers_tips: brewersTips,
    contributed_by: contributedBy,
    food_pairing: foodPairing,
    ingredients: { hops, malt, yeast },
  } = recipe;

  const getIngredientListItems = (ingredient) => (
    <List>
      {ingredient.map(({ name, amount: { unit, value } }, index) => (
        <li key={index}>
          {name}: {value} {unit}
        </li>
      ))}
    </List>
  );

  const recipeImage = imageURL ? imageURL : defaultRecipeImage;

  return (
    <Card>
      <Image src={`${recipeImage}`} alt="bottle of beer" />
      <div>
        <h2>{name}</h2>
        <p>
          <Subtitle>Description:</Subtitle> {description}
        </p>
        <p>
          <Subtitle>abv:</Subtitle> {abv}%
        </p>
        <p>
          <Subtitle>Attenuation level:</Subtitle> {attenuationLevel}
        </p>
        <p>
          <Subtitle>Brewers tips:</Subtitle> {brewersTips}
        </p>
        <p>
          <Subtitle>Contributed by:</Subtitle> {contributedBy}
        </p>
        <div>
          <p>
            <Subtitle>Food pairing:</Subtitle>
          </p>
          <List>
            {foodPairing.map((item) => (
              <li key={item}>{item};</li>
            ))}
          </List>
        </div>
        <div>
          <p>
            <Subtitle>Ingredients:</Subtitle>
          </p>
          <List>
            <li>{getIngredientListItems(hops)}</li>
            <li>{getIngredientListItems(malt)}</li>
            <li>{yeast}</li>
          </List>
        </div>
      </div>
    </Card>
  );
};

export default RecipeInfo;
