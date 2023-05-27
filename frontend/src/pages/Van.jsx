import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { getSingleVan } from '../store/vans'
import Gallery from '../components/Gallery'
import AboutVan from '../components/vanDetails/AboutVan'
import CreateBookingCalendar from '../components/Booking/CreateBookingCalendar'

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
      <div className='flex flex-col md:w-4/5 md:mx-auto'>
        <Gallery images={van.Images} van={van}/>
        <AboutVan van={van}/>
        <CreateBookingCalendar history={history} bookings={van.Bookings}/>
      </div>
        
  )}
    </>
  )
}

export default Van