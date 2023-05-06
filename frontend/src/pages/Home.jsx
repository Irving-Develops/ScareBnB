import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { getAllSpots } from '../store/spots';
import ImageCarousel from '../components/carousel/ImageCarousel';
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-16">
        {vans && vans.map((van) => 
        <ImageCarousel images={van.Images} 

        />)}
      </div>
    </section>
  );
}

export default Home