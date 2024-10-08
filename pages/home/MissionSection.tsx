import React from "react";
import aboutData from "@/data/aboutData.json";
import Image from "next/image";

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="container my-5">
        {/* Our Mission */}
        <div className="d-flex flex-column flex-md-row mb-5">
          <div className="bg-brown w-100 text-white p-5 rounded shadow-depth">
            <h2>Our Mission</h2>

            <p>
              At DiveMix, our mission is clear, to provide industry-leading
              compressed air and gas solutions. Our highly skilled personnel
              possess unparalleled expertise, ensuring that we deliver
              exceptional customer service alongside the highest quality
              products.
            </p>
          </div>

          <div className="w-100  d-flex justify-content-center align-items-center">
            <div
              style={{ position: "relative", width: "400px", height: "100%" }}
            >
              <Image fill alt="" src="/img/ourmission.png" />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="d-flex flex-column flex-md-row mb-5">
          <div className="w-100  d-flex justify-content-center align-items-center">
            <div
              style={{ position: "relative", width: "400px", height: "100%" }}
            >
              <Image fill alt="" src="/img/ourvalues.png" />
            </div>
          </div>

          <div className="bg-orange w-100 text-white p-5 rounded shadow-depth">
            <h2>Our Values</h2>
            <p>
              We uphold the prestigious “Made in Germany” standard, ensuring
              unmatched reliability and performance in every product.
            </p>
            <p>
              We continuously explore new technologies and methods to provide
              cutting-edge solutions.
            </p>
            <p>
              Our clients’ needs are at the forefront of everything we do,
              driving us to offer personalized and responsive service.
            </p>
          </div>
        </div>

        {/* Our committment */}
        <div className="d-flex flex-column flex-md-row mb-5">
          <div className="bg-babyblue w-100 text-white p-5 rounded shadow-depth">
            <h2>Why Choose DiveMix?</h2>
            <p>
              Choosing DiveMix means partnering with a company that values
              precision, reliability, and customer satisfaction. Our German
              engineering expertise, combined with local market understanding,
              ensures that we deliver tailored solutions that meet and exceed
              your expectations.
            </p>
          </div>

          <div className="w-100  d-flex justify-content-center align-items-center">
            <div
              style={{ position: "relative", width: "400px", height: "100%" }}
            >
              <Image fill alt="" src="/img/whyChoose.jpg" />
            </div>
          </div>
        </div>

        {/* {aboutData.map((section) => (
          <div key={section.id} className="mb-4">
            <h2 className="text-capitalize fw-bold clrMain mb-3">
              {section.name}
            </h2>
            <p>{section.desc}</p>
            {section.child.length > 0 && (
              <ul className="list-group list-group-flush">
                {section.child.map((childItem) => (
                  <li key={childItem.id} className="list-group-item">
                    <h5 className="fw-bold mb-2">{childItem.name}</h5>
                    <p>{childItem.desc}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default MissionSection;
