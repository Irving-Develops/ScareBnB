import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'

const Book = () => {
    const [booking, setBooking] = useState();
    const {id} = useParams()

    console.log(id, "id")

    useEffect(() => {
        setBooking(JSON.parse(localStorage.getItem(`van1-booking`)));
    }, [id])
    console.log(localStorage.getItem(`van${id}-booking`), "localStorage")

  return (
    <div>Book</div>
  )
}

export default Book