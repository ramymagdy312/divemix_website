"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import homeSliderData from "@/data/homeSlider.json";
import HomeSliderSlice from "./HomeSliderSlice";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const HomeSlider = () => {
  return (
    <div className="homeSlider homeSection">
      <div className="container text-center">
        <h5 className="clrMain fw-bold">GALLERY</h5>
        <h2 className="text-capitalize fw-bold mb-3">Browse our gallery</h2>
        <div className="titleAnimation mb-5 mt-4 m-auto"></div>
      </div>

      <Slider {...sliderSettings}>
        {homeSliderData.map((slice) => (
          <HomeSliderSlice
            key={slice.id}
            title={slice.title}
            imageURL={slice.imageURL}
          />
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
