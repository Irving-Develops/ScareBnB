import React from 'react'

const VanHeader = ({van}) => {
    const {name, location, price, Reviews, make, model, year} = van

    console.log(name, location, price, Reviews, make, model, year)
  return (
    <header>
        <h1 className='text-2xl bold'>{name} - {year} {make} {model}</h1>
    </header>
  )
}

export default VanHeader