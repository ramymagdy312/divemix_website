import Card from "@/components/Card/Card";
import React from "react";
import applications from "@/data/applicationsData.json";

const ApplicationsSection = () => {
  return (
    <section className="homeSection">
      <h5 className="clrMain fw-bold text-center">OUR APPLICATIONS</h5>
      <h2 className="text-capitalize fw-bold mb-3 w-100 w-md-50 text-center">
        Custome solutions for your business
      </h2>
      <div className="titleAnimation mb-4 m-auto"></div>

      <div className="row mt-5">
        {applications.map((applications, i) => (
          <div
            key={applications.id}
            className="col-md-3"
            data-aos="zoom-in"
            data-aos-delay={`${i * 200}`}
          >
            <Card
              img={applications.img}
              title={applications.title}
              desc={applications.desc}
              cta={applications.cta}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationsSection;
