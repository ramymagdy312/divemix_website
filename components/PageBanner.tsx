"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bannerData from "@/data/homeBannerData.json";
import Link from "next/link";

type props = {
    adddress: string;
  };

const PageBanner = (props: props) => {
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
    <section className="pageBanner">
      {bannerData.map((slice, i) => (
        <div key={i} className={`pageBannerSlice ${i == currentSliceIndex ? "active" : ""}`}>
          <div className="pageBannerImage">
            <Image src={slice.image} alt="" fill />
            <div className="pageBannerImage_mask"></div>
          </div>
          <div className="pageBannerTxt">
            <h1 className="pageBannerTitle" data-aos="zoom-in">{props.adddress}</h1>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PageBanner;