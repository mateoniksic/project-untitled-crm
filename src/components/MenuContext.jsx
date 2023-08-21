import { styled } from 'styled-components';
import { createPortal } from 'react-dom';
import { MoreVerticalIcon } from 'lucide-react';

import { createContext, useContext, useState } from 'react';

import { useOutsideClick } from '../hooks/useOutsideClick';

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState('');
  const [position, setPosition] = useState(null);

  const close = () => setOpenId('');
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, open, close, position, setPosition }}>
      {children}
    </MenusContext.Provider>
  );
}

const StyledMenu = styled.div`
  position: relative;
`;

function Menu({ children }) {
  return <StyledMenu>{children}</StyledMenu>;
}

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--component-hovered-neutral);
  }
`;

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    const rect = e.target.closest('button').getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    if (openId === '' || openId !== id) {
      open(id);
    } else {
      close();
    }
  }

  return (
    <StyledToggle onClick={handleClick}>
      <MoreVerticalIcon />
    </StyledToggle>
  );
}

const StyledList = styled.ul`
  width: 100%;
  max-width: 16rem;
  padding: 0.8rem;
  background-color: var(--bg-normal);
  box-shadow: -0.6rem 0.6rem 0.1rem var(--bg-subtle);
  border: 1px solid var(--border-interactive);
  border-radius: var(--border-radius-sm);

  position: absolute;
  right: ${(props) => props.$position.x}px;
  top: ${(props) => props.$position.y}px;
`;

function List({ id, children }) {
  const { openId, close, position } = useContext(MenusContext);

  const ref = useOutsideClick(close);

  if (openId !== id) return null;

  return createPortal(
    <StyledList $position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body,
  );
}

const StyledItem = styled.li`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: stretch;

  &:not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;

function Item({ children }) {
  return <StyledItem>{children}</StyledItem>;
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Item = Item;

export default Menus;
