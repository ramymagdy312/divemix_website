import Image from "next/image";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { IoCallSharp } from "react-icons/io5";

const AboutSection = () => {
  return (
    <section className="homeSection">
      <div className="row align-items-stretch gx-5 gy-4">
        <div className="col-md-7">
          <h5 className="clrMain fw-bold">ABOUT US</h5>
          <h2 className="text-capitalize fw-bold mb-3">DiveMix Ltd.</h2>
          <h5 className="clrMain fw-bold">
            specialized in gas and compressor technologies
          </h5>
          <h5 className="clrMain fw-bold">Our Name is a promise</h5>
          <div className="titleAnimation mb-4"></div>
          <p className="text-muted">
            We offer a vast range of products and services including industrial
            air and nitrogen compressors, mobile and stationary breathing air
            compressors and accessories, storage and distribution systems as
            well as systems for natural gas, inert gases and custom built units
            for special applications. DiveMix has developed its own Nitrox
            blending system - The DiveMixer - for the SCUBA diving industry with
            superior reliability, performance and cost efficiency in mind. The
            outstanding quality of innovative products and services offered by
            DiveMix, also provides great assistance to the oil and gas industry
            in strengthening productivity and competitive capability. We offer
            wellhead control units, hydraulic test units, gas test units to name
            just a few. Our broad range of experience and products further
            includes PSA oxygen generators, oxygen filling stations for
            hospitals, factories and workshops as well as PSA nitrogen
            generators for industrial applications. Our solutions aim at optimal
            economy and efficiency. We also offer all-round competent
            consultancy services concerning most gas logistics.
          </p>

          <div className="row g-2 row-cols-2 mb-4">
            <div className="col fs-5" data-aos="zoom-in-up">
              <GiCheckMark className="clrMain" /> Award wining
            </div>
            <div
              className="col fs-5"
              data-aos="zoom-in-up"
              data-aos-delay={200}
            >
              <GiCheckMark className="clrMain" /> 24/7 support
            </div>
            <div
              className="col fs-5"
              data-aos="zoom-in-up"
              data-aos-delay={300}
            >
              <GiCheckMark className="clrMain" /> Professional staff
            </div>
            <div
              className="col fs-5"
              data-aos="zoom-in-up"
              data-aos-delay={400}
            >
              <GiCheckMark className="clrMain" /> Fair prices
            </div>
          </div>

          <div
            className="d-flex align-items-center gap-3 mb-4"
            data-aos="zoom-in"
            data-aos-delay={600}
          >
            <IoCallSharp
              className="aboutSection_callIcon"
              data-aos="zoom-out"
              data-aos-delay={700}
            />
            <div className="d-flex flex-column gap-1">
              <span className="fs-5">Call to ask any question</span>
              <span className="fs-5 clrMain fw-bold">+0109 990 8990</span>
            </div>
          </div>

          <button
            className="aboutSection_ctaBtn"
            data-aos="zoom-out"
            data-aos-delay={800}
          >
            Request a quote
          </button>
        </div>

        <div className="col-md-5">
          <div
            className="aboutSection_img"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <Image fill src="/img/car.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
