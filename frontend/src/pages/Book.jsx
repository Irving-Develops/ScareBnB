import React, {useEffect, useState, useMemo, useRef} from 'react'
import { useParams } from 'react-router'
import EditBooking from '../components/EditBooking';

const Book = () => {
    const [booking, setBooking] = useState();
    const {id} = useParams();

      useEffect(() => {
        setBooking(JSON.parse(localStorage.getItem(`van-${id}-booking`)));
      }, [id]);
      
  return (
    <section>
      {booking && (
        <EditBooking booking={booking} setBooking={setBooking} />
      )}
    </section>
  )
}

export default Book