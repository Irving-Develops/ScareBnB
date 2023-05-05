import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { thunkGetAllSpots } from '../store/spots'
import LoginForm from '../components/forms/LoginForm'
import ModalComponent from '../components/ModalComponent'

const Home = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(thunkGetAllSpots())
    },[dispatch])

    

  return (
    <section>
      <h2>HomePage</h2>
    </section>
  );
}

export default Home