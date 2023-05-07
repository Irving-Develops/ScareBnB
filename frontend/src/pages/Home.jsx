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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-16">
        {vans && vans.length > 0 &&
          vans.map((van) => (
            <article>
              <Link to={`/vans/${van.id}`}>
                <ImageCarousel key={van.id} images={van.Images} />
              </Link>
              <VanDetails key={van.id} van={van} />
            </article>
          ))}
      </div>
    </section>
  );
};

export default Home;
