import Image from "next/image";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { IoCallSharp } from "react-icons/io5";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              <div className="sec-title">
                <h2 className="text-capitalize fw-bold mb-3">
                  About DiveMix Ltd.
                </h2>
                <h5 className="clrMain fw-bold">
                  Specialized in gas and compressor technologies
                </h5>
              </div>
              <div className="text-muted">
                Founded in 2004 as a German – Egyptian Corporation,
                <strong className="clrMain fw-bold"> DiveMix</strong> has grown
                to be a prominent, active figure, known for its reliable
                top-of-the-range compressed air and gas products as well as
                plants.
                <br />
                <br />
                <strong className="clrMain fw-bold">DiveMix</strong> is the sole
                agent, representative, distributor and authorized service point
                for carefully selected, high quality products that carry the
                prestigious “made in Germany” trademark. We serve various market
                sectors such as oil and gas fields, food & beverage,
                pharmaceutical companies, chemical and petrochemical industries,
                laser cutting, marine and offshore locations, as well as the
                recreational diving tourism industry to name just a few.
              </div>
            </div>
          </div>
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInLeft">
              <div className="author-desc">
                <h2>DiveMix</h2>
                <span>Specialized in gas and compressor technologies</span>
              </div>
              <div className="image-1">
                <a href="#" className="lightbox-image" data-fancybox="images">
                  <Image fill src="/img/car.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
