import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { getUserBookings } from '../store/bookings'

const MyTrips = () => {
    const user = useSelector(state => state.session.user)
    const bookings = useSelector(state => state.bookings)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!user) {
            navigate('/')
        }else {
            try {
                dispatch(getUserBookings(user.id))
            }   catch (e) {             
                console.log(e)
            }
        }
    }, [user, navigate, dispatch])

    console.log(bookings, 'bookings===')

  return (
    <div>MyTrips</div>
  )
}

export default MyTrips