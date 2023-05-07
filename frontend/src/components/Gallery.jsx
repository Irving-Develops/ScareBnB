import React from "react";

const Gallery = ({ images }) => {
  console.log(images);
  return (
    <div
      className="carousel w-full h-96 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-4 lg:rounded-lg mx-auto overflow-hidden lg:w-4/5 lg:h-60vh"
    >
      <div className="lg:col-span-2 lg:row-span-2 lg:block carousel-item w-full">
        <img
          src={images[0].url}
          alt={images[0].id}
          className="lg:h-full lg:w-full object-cover"
        />
      </div>
      <div className="lg:col-start-3 lg:block carousel-item w-full">
        <img
          src={images[1].url}
          alt={images[1].id}
          className="lg:h-full lg:w-full object-cover"
        />
      </div>
      <div className="lg:col-start-4 lg:block carousel-item w-full">
        <img
          src={images[2].url}
          alt={images[2].id}
          className="lg:h-full lg:w-full object-cover "
        />
      </div>
      <div className="lg:col-start-3 lg:row-start-2 lg:block carousel-item w-full">
        <img
          src={images[3].url}
          alt={images[3].id}
          className="lg:h-full lg:w-full object-cover"
        />
      </div>
      <div className="lg:col-start-4 lg:row-start-2 lg:block carousel-item w-full">
        <img
          src={images[4].url}
          alt={images[4].id}
          className="lg:h-full lg:w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Gallery;
