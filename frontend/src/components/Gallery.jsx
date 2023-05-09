import React from "react";
import VanHeader from "./vanDetails/VanHeader";

const Gallery = ({ images, van}) => {


  return (
    <>
      {/* Large Screens */}
      <div className="hidden md:block">
      <VanHeader van={van}/>    
      </div>
      <div className="hidden md:grid md:grid-cols-4 md:grid-rows-2 md:gap-1.5 md:rounded-xl mx-auto overflow-hidden md:w-4/5 lg:h-60vh md:h-50vh">
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
      <div className="md:hidden">
        <VanHeader van={van}/>
      </div>
    </>
  );
};

export default Gallery;
