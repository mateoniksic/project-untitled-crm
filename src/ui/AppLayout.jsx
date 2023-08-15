import { Outlet, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import Sidebar from './Sidebar';
import Header from './Header';

import { useApp } from '../context/AppContext';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 23.5rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
`;

const Main = styled.main`
  background-color: var(--bg-subtle);
`;

function AppLayout() {
  const { pageTitle } = useApp();

  return (
    <StyledAppLayout>
      <Sidebar />
      <Header pageTitle={pageTitle} />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
