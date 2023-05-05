import React, { useState } from "react";
import { Modal } from "../context/Modal";

const ModalComponent = ({ children, text, setShowModal, showModal }) => {
  return (
    <>
      <button className="btn" onClick={() => setShowModal(true)}>
        {text}
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="bg-white w-full rounded">{children}</div>
        </Modal>
      )}
    </>
  );
};

export default ModalComponent;
