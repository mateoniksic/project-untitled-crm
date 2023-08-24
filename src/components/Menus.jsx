import { styled } from 'styled-components';
import { MoreVerticalIcon } from 'lucide-react';
import { createPortal } from 'react-dom';
import { createContext, useContext, useState } from 'react';

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
  border-radius: var(--border-radius-sm);
  border: none;
  padding: 0.4rem;
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--component-hovered-neutral);
  }
`;

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();

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
  background-color: var(--bg-normal);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-interactive);
  box-shadow: -0.6rem 0.6rem 0.1rem var(--bg-subtle);
  max-width: 16rem;
  padding: 0.8rem;
  position: absolute;
  right: ${(props) => props.$position.x}px;
  top: ${(props) => props.$position.y}px;
  width: 100%;
`;

function List({ id, children }) {
  const { openId, close, position } = useContext(MenusContext);

  if (openId !== id) return null;

  return createPortal(
    <StyledList $position={position}>{children}</StyledList>,
    document.body,
  );
}

const StyledItem = styled.li`
  align-items: stretch;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;

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
