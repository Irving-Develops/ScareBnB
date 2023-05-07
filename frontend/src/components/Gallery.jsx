import React from "react";
import VanHeader from "./vanDetails/VanHeader";

const Gallery = ({ images, van}) => {

  console.log(images);
  return (
    <>
      {/* Large Screens */}
      <VanHeader van={van}/>
      <div className="hidden md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4 md:rounded-xl mx-auto overflow-hidden md:w-4/5 lg:h-60vh md:w-60%">
        <div className="md:col-span-2 md:row-span-2 md:block carousel-item w-full">
          <img
            src={images[0].url}
            alt={images[0].id}
            className="h-full w-full object-cover object-center "
          />
        </div>
        <div className="col-start-3 block carousel-item w-full">
          <img
            src={images[1].url}
            alt={images[1].id}
            className="h-full w-full object-cover object-center "
          />
        </div>
        <div className="col-start-4 block carousel-item w-full">
          <img
            src={images[2].url}
            alt={images[2].id}
            className="h-full w-full object-cover object-center "
          />
        </div>
        <div className="col-start-3 row-start-2 block carousel-item w-full">
          <img
            src={images[3].url}
            alt={images[3].id}
            className="h-full w-full object-cover object-center "
          />
        </div>
        <div className="col-start-4 row-start-2 block carousel-item w-full">
          <img
            src={images[4].url}
            alt={images[4].id}
            className="h-full w-full object-cover object-center "
          />
        </div>
      </div>

      {/* Small screens */}
      <div className="carousel h-60vh bg-black w-full md:hidden mx-auto">
        <div className="carousel-item w-full">
          <img
            src={images[0].url}
            alt={images[0].id}
            className="object-cover object-center w-full"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={images[1].url}
            alt={images[1].id}
            className="object-cover object-center w-full"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={images[2].url}
            alt={images[2].id}
            className="object-cover object-center w-full"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={images[3].url}
            alt={images[3].id}
            className="object-cover object-center w-full"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={images[4].url}
            alt={images[4].id}
            className="object-cover object-center w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
