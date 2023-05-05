import React from 'react'

const CarouselItems = () => {
  return (
    <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
      {/* <!--First item--> */}
      <div
        class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-te-carousel-item
        data-te-carousel-active
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
          class="block w-full"
          alt="Wild Landscape"
        />
      </div>
      {/* <!--Second item--> */}
      <div
        class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-te-carousel-item
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
          class="block w-full"
          alt="Camera"
        />
      </div>
      {/* <!--Third item--> */}
      <div
        class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-te-carousel-item
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
          class="block w-full"
          alt="Exotic Fruits"
        />
      </div>
    </div>
  );
}

export default CarouselItems