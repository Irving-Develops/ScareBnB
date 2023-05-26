import React from "react";

const Amenities = ({ van }) => {
  return (
    <div className="grid grid-cols-2">
      {/* <h3 className="border-b-2 text-[22px]">What this van offers</h3> */}
      {van?.Amenities &&
        van?.Amenities?.length > 0 &&
        van?.Amenities?.map((amenity, idx) => (
          <div className="flex justify-start w-[60%]">
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
