import React from "react";

const Amenities = ({ van }) => {
  return (
    <div className="grid grid-cols-2 ">
      {van?.Amenities &&
        van?.Amenities?.length > 0 &&
        van?.Amenities?.map((amenity, idx) => (
          <div className="flex justify-start">
            <img src={amenity.url} alt="amenity icon" className="w-6 h-6 mr-4" />
            <p className="text-base flex-grow pb-4" key={idx}>
              {amenity.name}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Amenities;
