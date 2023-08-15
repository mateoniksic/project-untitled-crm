import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, CircleDollarSign, Settings, LogOut } from 'lucide-react';

const StyledNav = styled.nav`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--component-selected);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--text-hc);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--text-hc);
  }
`;

function SidebarNav() {
  return (
    <StyledNav>
      <NavList>
        <li>
          <StyledNavLink to='/workspace/dashboard'>
            <LayoutDashboard />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/workspace/contacts'>
            <Users />
            <span>Contacts</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/workspace/deals'>
            <CircleDollarSign />
            <span>Deals</span>
          </StyledNavLink>
        </li>
      </NavList>

      <NavList>
        <li>
          <StyledNavLink to='/workspace/settings'>
            <Settings />
            <span>Settings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/'>
            <LogOut />
            <span>Sign out</span>
          </StyledNavLink>
        </li>
      </NavList>
    </StyledNav>
  );
}

export default SidebarNav;
