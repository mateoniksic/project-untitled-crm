import { styled } from 'styled-components';

import Logo from './Logo';
import SidebarNav from './SidebarNav'

const StyledSidebar = styled.aside`
  display: flex;
  flex-flow: column nowrap;
  gap: 2.4rem;
  justify-content: space-between;
  background: var(--bg-normal);
  padding: 1.6rem;
  border-right: 1px solid var(--border-non-interactive);

  grid-row: 1 / -1;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <SidebarNav/>
    </StyledSidebar>
  );
}

export default Sidebar;
