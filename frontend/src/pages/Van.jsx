import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { getSingleVan } from '../store/vans'
import Gallery from '../components/Gallery'
import AboutVan from '../components/vanDetails/AboutVan'
import Booking from '../components/Booking'

const Van = ({history}) => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const van = useSelector(state => state.vans)

    useEffect(() => {
        dispatch(getSingleVan(id))
    }, [dispatch, id])

  return (
    <>
    {van && van.Images && van.Images.length > 0 && (
      <>
        <Gallery images={van.Images} van={van}/>
        <AboutVan van={van}/>
        <Booking history={history} bookings={van.Bookings}/>
      </>
        
  )}
    </>
  )
}

export default Van