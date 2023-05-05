import React from "react";


import { Carousel } from "@material-tailwind/react";
 
export default function Example({van}) {


  return (
    <Carousel className="rounded-xl">
      {/* {van?.Images && van?.Images.map( image =>(
        <img
          src={image.url}
          alt=" 1"
          className="h-full w-full object-cover"
        />

      ))} */}
      {van?.Images && van?.Images.length > 0 && (
        <img
          src={van.Images[0]?.url}
          alt=" 1"
          className="h-full w-full object-cover"
        />

      )}

      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt=" 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt=" 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );}