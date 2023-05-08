import React from "react";


import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export default function ImageCarousel({images, vanId}) {

  return (
    <Carousel  className="rounded-xl h-64 max-w-64">
      {images&&
        images.length > 0 &&
        images.map((image) => (
          <Link to={`/vans/${vanId}`}>
          <img
            key={image.id}
            src={image.url}
            alt={image.id}
            className="h-full w-full object-cover"
          />
          </Link>
        ))}
    </Carousel>
  );}