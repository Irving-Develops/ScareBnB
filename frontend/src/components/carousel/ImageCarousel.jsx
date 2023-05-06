import React from "react";


import { Carousel } from "@material-tailwind/react";
 
export default function ImageCarousel({images}) {

console.log(images, "van")
  return (
    <Carousel  className="rounded-xl h-64 max-w-64">
      {images&&
        images.length > 0 &&
        images.map((image) => (
          <img
            src={image.url}
            alt={image.id}
            className="h-full w-full object-cover"
          />
        ))}
    </Carousel>
  );}