import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { RiArrowGoBackFill } from 'react-icons/ri';

const BackLink = styled(Link)`
  display: flex;
  width: 150px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  :hover {
    background-color: #4f9bd9;
  }
`;

const GoBackLink = ({ backLink }) => {
  return (
    <BackLink to={backLink}>
      <RiArrowGoBackFill /> GoBack
    </BackLink>
  );
};

export default GoBackLink;
