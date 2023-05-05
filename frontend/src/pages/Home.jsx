import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { thunkGetAllSpots } from '../store/spots'
import LoginForm from '../components/LoginForm'
import ModalComponent from '../components/ModalComponent'

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkGetAllSpots())
    },[dispatch])

      const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <h2>HomePage</h2>
      <ModalComponent showModal={showModal} setShowModal={setShowModal} text="Sign up">
          <LoginForm setShowModal={setShowModal}/>
      </ModalComponent>
    </section>
  );
}

export default Home