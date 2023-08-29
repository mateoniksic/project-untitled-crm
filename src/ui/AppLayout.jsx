import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
`;

const AppMain = styled.main`
  background-color: var(--bg-subtle);
  overflow: auto;
  padding: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <AppSidebar />
      <AppHeader />
      <AppMain>
        <Outlet />
      </AppMain>
    </StyledAppLayout>
  );
}

export default AppLayout;
