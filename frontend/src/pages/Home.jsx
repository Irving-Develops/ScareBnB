import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { thunkGetAllSpots } from '../store/spots'

const Home = () => {
    const dispatch = useDispatch()
    const spots = useSelector((state) => state.spots)

    useEffect(() => {
        dispatch(thunkGetAllSpots())
    },[dispatch])
    console.log(spots, "---------")
  return (
    <section>
      <h2>HomePage</h2>
    </section>
    )
}

export default Home