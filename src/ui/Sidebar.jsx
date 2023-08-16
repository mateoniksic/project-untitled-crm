import { styled } from 'styled-components';

import Logo from './Logo';
import SidebarNav from './SidebarNav';

const StyledSidebar = styled.aside`
  grid-row: 1 / -1;
  display: flex;
  flex-flow: column nowrap;
  gap: 2.4rem;
  justify-content: space-between;
  padding: 1.6rem;
  background: var(--bg-normal);
  border-right: 1px solid var(--border-non-interactive);
  overflow-y: auto;
`;

const SidebarLogo = styled(Logo)`
  padding: 0 0.8rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarLogo to="/workspace" />
      <SidebarNav />
    </StyledSidebar>
  );
}

export default Sidebar;
