import styled from '@emotion/styled';

export const Card = styled.article`
  border: 1px solid black;
  display: flex;
  padding: 12px;
  border-radius: 10px;
  gap: 20px;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const Image = styled.img`
  width: 200px;
`;

export const Subtitle = styled.span`
  font-weight: 700;
`;

export const Comment = styled.p`
  color: red;
`;
