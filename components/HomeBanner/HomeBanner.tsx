"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bannerData from "@/data/homeBannerData.json";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const HomeBanner = () => {
  const [currentSliceIndex, setCurrentSliceIndex] = useState(0);

  const next = () => {
    setCurrentSliceIndex((prev) => {
      if (prev == bannerData.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  const prev = () => {
    setCurrentSliceIndex((prev) => {
      if (prev == 0) {
        return bannerData.length - 1;
      }

      return prev - 1;
    });
  };

  useEffect(() => {
    const autoInterval = setInterval(next, 5000);

    return () => clearInterval(autoInterval);
  }, [currentSliceIndex]);

  return (
    <section className="homeBanner">
      {bannerData.map((slice, i) => (
        <div
          key={i}
          className={`homeBannerSlice ${
            i == currentSliceIndex ? "active" : ""
          }`}
        >
          <div className="homeBannerImage">
            <Image src={slice.image} alt="" fill />
            {/* <div className="homeBannerImage_mask"></div> */}
          </div>

          <div className="homeBannerTxt">
            <div className="container">
              <h1 className="homeBannerTitle">{slice.title}</h1>
              <h2 className="homeBannerCaption">{slice.caption}</h2>
            </div>
          </div>
        </div>
      ))}

      <button className="homeBannerNav left" onClick={prev}>
        <IoIosArrowBack />
      </button>
      <button className="homeBannerNav right" onClick={next}>
        <IoIosArrowForward />
      </button>
    </section>
  );
};

export default HomeBanner;
