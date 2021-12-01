import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ImageSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <Carousel {...settings} className="mt-2">
        <Wrap>
          <img
            src="/images/slider-badging.jpg"
            alt=""
            className="w-full h-full rounded border-4 border-transparent  hover:border-gray-400 duration-300"
          />
        </Wrap>
        <Wrap>
          <img
            src="/images/slider-badag.jpg"
            alt=""
            className="w-full h-full rounded border-4 border-transparent hover:border-gray-400 duration-300"
          />
        </Wrap>
        <Wrap>
          <img
            src="/images/slider-scales.jpg"
            alt=""
            className="w-full h-full rounded border-4 border-transparent hover:border-gray-400 duration-300"
          />
        </Wrap>
        <Wrap>
          <img
            src="/images/slider-scale.jpg"
            alt=""
            className="w-full h-full rounded border-4 border-transparent hover:border-gray-400 duration-300"
          />
        </Wrap>
      </Carousel>
    );
  }
}

const Carousel = styled(Slider)`
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
`;
