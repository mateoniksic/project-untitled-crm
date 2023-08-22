import { styled } from 'styled-components';
import {
  CircleDollarSign,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from 'lucide-react';

import Logo from './Logo';
import { Nav, NavList, NavLink } from './VerticalNav';
import SignOut from '../features/auth/forms/SignOut';

const StyledSidebar = styled.aside`
  background: var(--bg-normal);
  border-right: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: column nowrap;
  gap: 2.4rem;
  grid-row: 1 / -1;
  justify-content: space-between;
  overflow-y: auto;
  padding: 1.6rem;
`;

const SidebarLogo = styled(Logo)`
  padding: 0 0.8rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarLogo to="/workspace" />
      <Nav>
        <NavList>
          <li>
            <NavLink to="/workspace/dashboard">
              <LayoutDashboard size="20" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/workspace/contacts">
              <Users size="20" />
              <span>Contacts</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/workspace/deals">
              <CircleDollarSign size="20" />
              <span>Deals</span>
            </NavLink>
          </li>
        </NavList>

        <NavList>
          <li>
            <NavLink to="/workspace/settings">
              <Settings size="20" />
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <SignOut />
          </li>
        </NavList>
      </Nav>
    </StyledSidebar>
  );
}

export default Sidebar;
