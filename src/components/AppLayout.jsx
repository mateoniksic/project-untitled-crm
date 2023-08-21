import { Outlet, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import Sidebar from './Sidebar';
import Header from './Header';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(18.5rem, 23.5rem) 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
`;

const Main = styled.main`
  background-color: var(--bg-subtle);
  overflow: auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
