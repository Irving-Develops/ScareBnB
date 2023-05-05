import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { getAllSpots } from '../store/spots';
import Example from '../components/carousel/Carousel';
// import { thunkGetAllSpots } from '../store/spots'


const Home = () => {
    const dispatch = useDispatch()
    const vans = useSelector(state => state.spots)

    console.log(vans, "here")


    useEffect(() => {
        dispatch(getAllSpots())
    },[dispatch])

    

  return (
    <section>
      <h2>HomePage</h2>

      {vans && vans.map(van => (
        <Example van={van}/>
        // <p>{van.name}</p>

      ))}
      {vans && (
        <Example van={vans[0]}/>

      )}

    </section>
  );
}

export default Home