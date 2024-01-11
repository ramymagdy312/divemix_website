import ProvidersCard from "@/components/ProvidersCard/ProvidersCard";
import React from "react";
import providers from "@/data/providersData.json";

const ProvidersSection = () => {
  return (
    <section className="homeSection">
      <h5 className="clrMain fw-bold text-center">OUR PROVIDERS</h5>
      <h2 className="text-capitalize fw-bold mb-3 w-100 w-md-50 text-center">
        world’s biggest brands trust us.
      </h2>
      <div className="titleAnimation mb-5 mt-4 m-auto"></div>
      <div className="d-flex justify-content-between gap-5 align-items-center mt-5">
        {providers.map((providers, i) => (
          <div key={i} data-aos="zoom-in-up" data-aos-delay={`${i * 200}`}>
            <ProvidersCard img={providers.img} url={providers.url} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProvidersSection;
