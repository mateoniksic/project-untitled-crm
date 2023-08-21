import {
  createContext,
  useContext,
  useState,
  cloneElement,
  useEffect,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';
import { useOutsideClick } from '../hooks/useOutsideClick';

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
  display: flex;
  justify-content: center;
  max-width: 62rem;
  width: 100%;
`;

const Overlay = styled.div`
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

  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        {cloneElement(children, { onCloseModal: () => close(name) })}
      </StyledModal>
    </Overlay>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
