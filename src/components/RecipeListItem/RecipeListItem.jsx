import { Card, Comment, Image, Subtitle } from './RecipeListItem.styled';

const Recipe = ({ recipe }) => {
  const {
    name,
    description,
    image_url: imageURL,
    abv,
    attenuation_level: attenuationLevel,
    brewers_tips: brewersTips,
    contributed_by: contributedBy,
  } = recipe;

  return (
    <Card>
      <Image src={`${imageURL}`} alt="bottle of beer" />
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
        <Comment>
          *To move a card to the deletion queue - right-click on a group of
          cards and confirm deletion
        </Comment>
      </div>
    </Card>
  );
};

export default Recipe;
