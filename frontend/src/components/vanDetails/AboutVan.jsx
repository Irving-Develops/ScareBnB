import React from 'react'
import Amenities from './Amenities'

const AboutVan = ({van}) => {
console.log(van, "van in about van")

  return (
    <div className="flex flex-col w-[45%] ml-24">
    <h3 className='border-b-2 text-[22px] pt-12 pb-6'>{van?.name} hosted by {van?.User?.username}</h3>
    <p className='text-base pt-8 pb-12'>{van?.description}</p>

    <section>
    
    <Amenities van={van}/>
    </section>
    </div>
  )
}

export default AboutVan