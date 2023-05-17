import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVans } from "../store/vans";
import ImageCarousel from "../components/carousel/ImageCarousel";
import VanDetails from "../components/VanDetails";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const vans = useSelector((state) => state.vans);

  useEffect(() => {
    dispatch(getAllVans());
  }, [dispatch]);

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-4/5 mx-auto">
        {vans && vans.length > 0 &&
          vans.map((van, idx) => (
            <article key={idx}>
              <ImageCarousel images={van.Images} vanId={van.id}/>
              <VanDetails van={van} />
            </article>
          ))}
      </div>
    </section>
  );
};

export default Home;
