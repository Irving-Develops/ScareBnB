import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { thunkGetAllSpots } from '../store/spots'
import LoginForm from '../components/LoginForm'

const Home = () => {
    const dispatch = useDispatch()
    const spots = useSelector((state) => state.spots)
    const user = useSelector(state => state)
    useEffect(() => {
        dispatch(thunkGetAllSpots())
    },[dispatch])
    console.log(user, "---------")
  return (
    <section>
      <h2>HomePage</h2>
      <LoginForm />
    </section>
    )
}

export default Home