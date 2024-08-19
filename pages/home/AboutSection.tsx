import Image from "next/image";
import React from "react";
import companyData from "@/data/companyData.json";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              <div className="sec-title">
                <h2 className="text-capitalize fw-bold mb-3">
                  About {companyData.title}
                </h2>
                <h5 className="clrMain fw-bold">{companyData.subtitle}</h5>
              </div>
              <div className="text-muted">
                {companyData.desc.split(".").map((paragraph, idx) => (
                  <p key={idx}>
                    {paragraph.includes(companyData.title) ? (
                      <>
                        <strong className="clrMain fw-bold">
                          {companyData.title}
                        </strong>{" "}
                        {paragraph.split(companyData.title)[1]}
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInLeft">
              <div className="author-desc">
                <h2>{companyData.title}</h2>
                <span>{companyData.subtitle}</span>
              </div>
              <div className="image-1">
                <a href="#" className="lightbox-image" data-fancybox="images">
                  <Image
                    fill
                    src={companyData.image.src}
                    alt={companyData.image.alt}
                  />
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
