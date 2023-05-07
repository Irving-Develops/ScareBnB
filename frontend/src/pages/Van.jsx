import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { getSingleVan } from '../store/vans'
import Gallery from '../components/Gallery'

const Van = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const van = useSelector(state => state.vans)

    useEffect(() => {
        dispatch(getSingleVan(id))
    }, [dispatch, id])

    console.log(van, id)
  return (
    <>
    {van && van.Images && van.Images.length > 0 && (
        <Gallery images={van.Images}/>
        
  )}
    </>
  )
}

export default Van