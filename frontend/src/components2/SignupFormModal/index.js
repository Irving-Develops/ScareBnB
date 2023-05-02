import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import Button from '../../components/Button';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button id="sign-up" onClick={() => setShowModal(true)}>Sign Up</button> */}
      <Button children={"Sign Up"} onClick={() => setShowModal(true) }/>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;