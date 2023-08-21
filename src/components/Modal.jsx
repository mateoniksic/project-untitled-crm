import { styled } from 'styled-components';
import { createPortal } from 'react-dom';

import {
  createContext,
  useContext,
  useState,
  cloneElement,
  useEffect,
  useRef,
} from 'react';

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, windowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(windowName) });
}

const StyledModal = styled.div`
  align-items: center;
  backdrop-filter: blur(0.4rem);
  background-color: var(--bg-normal-65);
  display: flex;
  inset: 0;
  justify-content: center;
  position: fixed;
  transition: all 0.5s;
  z-index: 9999;
`;

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <StyledModal>
      {cloneElement(children, { onCloseModal: () => close(name) })}
    </StyledModal>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
