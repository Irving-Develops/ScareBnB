import React from 'react'

const AboutVan = ({van}) => {


  return (
    <>
    <h3 className='border-b-2 text-xl'>Hosted by {van?.User?.username}</h3>
    <p className='text-lg'>{van?.description}</p>

    <h3 className='border-b-2 text-xl'>What this van has to offer.</h3>
    {van?.Amenities && van?.Amenities?.length > 0 && van?.Amenities?.map((amenity, idx) => (
      <p key={idx}>{amenity.name}</p>
    ))}

    </>
  )
}

export default AboutVan