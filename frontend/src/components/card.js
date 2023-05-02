export default function Card({images}) {
    console.log(images, "images in card")
  return (
    <div className="w-full h-64 carousel rounded-box bg-red-500">
        {images.map((image) => (
            <div className="carousel-item w-full">
                <img className="w-full h-full object-cover" alt="" src={image.url}/>
            </div>
        ))}
    </div>
  );
}
