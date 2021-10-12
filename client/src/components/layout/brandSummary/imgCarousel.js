import React from "react";
import { Carousel } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import 'bootstrap/dist/css/bootstrap.min.css';


function ImgCarousel(props) {
  let imgAr = []
  imgAr = props.images.map((image, index) =>

      <Carousel.Item interval={10000} style = {{marginBottom:"5%"}}>
        <p style={{margin:"2%"}}>{image.imageName}</p>
        <img src={image.url} style ={{width: "25%"}}></img>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    )
  return (
    <Carousel>
      {imgAr}
    </Carousel>
  )
}

export default ImgCarousel;