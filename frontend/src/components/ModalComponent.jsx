import React, { useContext } from "react";
import { Modal } from "../context/Modal";
import { ToggleModalContext } from "../context/Modal";

const ModalComponent = ({ children, text}) => {
      const { showModal, updateShowModal } = useContext(ToggleModalContext);
  return (
    <>
      <button className="text-left active:bg-rose" onClick={() => updateShowModal(true)}>
        {text}
      </button>
      {showModal && (
        <Modal onClose={() => updateShowModal(false)}>
          <div className="bg-white w-full rounded">{children}</div>
        </Modal>
      )}
    </>
  );
};

export default ModalComponent;
