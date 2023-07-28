import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
`;

export const Item = styled.li`
  width: 100%;
  & a {
    text-decoration: none;
    display: block;
    color: inherit;
  }
`;
