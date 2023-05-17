import React, { useContext } from "react";
import { Modal } from "../context/Modal";
import { ToggleModalContext } from "../context/Modal";

const ModalComponent = ({ children, text}) => {
      const { showModal, updateShowModal } = useContext(ToggleModalContext);
  return (
    <>
      <button className="text-left" onClick={() => updateShowModal(true)}>
        {text}
      </button>
      {showModal && (
        <Modal onClose={() => updateShowModal(false)}>
          <div className="rounded-full">{children}</div>
        </Modal>
      )}
    </>
  );
};

export default ModalComponent;
