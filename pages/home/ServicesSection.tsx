import Card from "@/components/Card/Card";
import React from "react";
import services from "@/data/servicesData.json";

const ServicesSection = () => {
  return (
    <section className="homeSection">
      <h5 className="clrMain fw-bold text-center">OUR SERVICES</h5>
      <h2 className="text-capitalize fw-bold mb-3 w-100 w-md-50 text-center">
        Custome solutions for your business
      </h2>
      <div className="titleAnimation mb-4 m-auto"></div>

      <div className="row mt-5">
        {services.map((service, i) => (
          <div key={service.id} className="col-md-3" data-aos="zoom-in" data-aos-delay={`${i * 200}`}>
            <Card img={service.img} title={service.title} desc={service.desc} cta={service.cta} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
