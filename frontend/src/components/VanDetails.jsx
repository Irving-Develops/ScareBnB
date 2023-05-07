import React from 'react'

const VanDetails = ({van}) => {
  return (
    <article>
        <p>{van.location}</p>
        <p>{van?.Reviews?[0].rating : "reviews"}</p>
        <p>{van.price}</p>
    </article>
  )
}

export default VanDetails