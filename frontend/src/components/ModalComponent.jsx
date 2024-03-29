import React, { useContext } from "react";
import { Modal } from "../context/Modal";
import { ToggleModalContext } from "../context/Modal";

const ModalComponent = ({ children, text, styles}) => {
      const { showModal, updateShowModal } = useContext(ToggleModalContext);
  return (
    <>
      <button className={styles ? styles : "text-left active:bg-white"} onClick={() => updateShowModal(true)}>
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
