import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 40px;
  text-decoration: none;
  & a {
    text-decoration: none;
    color: inherit;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 10px;
  }
  & a.active,
  a:hover {
    background-color: white;
    border-color: transparent;
  }
`;

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #4f9bd9;
`;

export const Main = styled.main`
  padding-top: 16px;
  padding-bottom: 16px;
`;
