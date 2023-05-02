import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import { Modal } from '../../context/Modal';
import BecomeHostForm from './BecomeHostForm';

function BecomeHostModal() {
  const [showModal, setShowModal] = useState(false);
  function handleChange() {
    setShowModal(false)
  }
    return (
    <>
      <button onClick={() => setShowModal(true)}>Become a Host</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BecomeHostForm setShowModal={setShowModal} onSubmit={handleChange}/>
        </Modal>
      )}
    </>
  );
}

export default BecomeHostModal;