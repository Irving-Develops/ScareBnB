import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BecomeHostForm from './BecomeHostForm';

function BecomeHostModal() {
  const [showModal, setShowModal] = useState(false);

    return (
    <>
      <button onClick={() => setShowModal(true)}>Become a Host</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BecomeHostForm />
        </Modal>
      )}
    </>
  );
}

export default BecomeHostModal;