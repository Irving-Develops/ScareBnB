export default function Card({images}) {
    console.log(images, "images in card")
  return (
    <div className="w-64 carousel rounded-box bg-red-500">
        asdfasdf
        {/* {images.map((image) => (
            <div className="carousel-item w-full">
                <img className="w-full" alt="" src={image.url}/>
            </div>
        ))} */}
      {/* <div className="carousel-item w-full">
        <img
          src="/images/stock/photo-1559703248-dcaaec9fab78.jpg"
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div> */}
    </div>
  );
}
