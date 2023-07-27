import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Main, Nav } from './SharedLayout.styled';
import Loader from 'components/Loader';

const SharedLayout = () => (
  <>
    <Header>
      <Container>
        <Nav>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/about">About</NavLink>
        </Nav>
      </Container>
    </Header>
    <Main>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </Main>
  </>
);

export default SharedLayout;
