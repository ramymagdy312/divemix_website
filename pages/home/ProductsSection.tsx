import Card from "@/components/Card/Card";
import React from "react";
import products from "@/data/productsData.json";

const ServicesSection = () => {
  return (
    <section className="homeSection">
      <h5 className="clrMain fw-bold text-center">OUR PRODUCTS</h5>
      <h2 className="text-capitalize fw-bold mb-3 w-100 w-md-50 text-center">
        Custome solutions for your business
      </h2>
      <div className="titleAnimation mb-4 m-auto"></div>

      <div className="row mt-5">
        {products.map((products, i) => (
          <div
            key={products.id}
            className="col-md-3"
            data-aos="zoom-in"
            data-aos-delay={`${i * 200}`}
          >
            <Card
              img={products.img}
              title={products.title}
              desc={products.desc}
              cta={products.cta}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
