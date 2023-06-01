import React from "react";
import Amenities from "./Amenities";
import Header from "../Header";

const AboutVan = ({ van }) => {

  return (
    <div className="flex flex-col w-[60%] ">
      <div className="border-b-[1px] border-[#dddddd]  text-[22px] pt-12 pb-6">
        <Header>
          {van?.name} hosted by {van?.User?.username}
        </Header>
      </div>
      <p className="text-base pt-8 pb-12 border-b-[1px] border-[#dddddd] ">
        {van?.description}
      </p>

      <section className="py-12 border-b-[1px] border-[#dddddd] ">
        <div className="pb-6">
          <Header>What this van offers</Header>
        </div>
        <Amenities van={van} />
      </section>
    </div>
  );
};

export default AboutVan;
