import React, {
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const ModalContext = React.createContext();
export const ToggleModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  const updateShowModal = (newValue) => {
    setShowModal(newValue);
  };

  return (
    <>
      <ModalContext.Provider value={value}>
        <ToggleModalContext.Provider value={{ showModal, updateShowModal }}>
          {children}
        </ToggleModalContext.Provider>
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children }) {
  console.log(onClose, "inside modal")
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;
  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={onClose} />
      <div id="modal-content">{children}</div>
    </div>,
    modalNode
  );
}
