"use client";
import Card from "@/components/Card/Card";
import React from "react";
import categories from "@/data/products.json";
import { useRouter } from "next/navigation";

const ServicesSection = () => {
  const router = useRouter();
  return (
    <section className="homeSection">
      <h5 className="clrMain fw-bold text-center">OUR CATEGORIES</h5>
      <h2 className="text-capitalize fw-bold mb-3 w-100 w-md-50 text-center">
        Custome solutions for your business
      </h2>
      <div className="titleAnimation mb-4 m-auto"></div>

      <div className="row mt-5">
        {categories.map((category, i) => (
          <div
            key={i}
            className="col-md-3"
            data-aos="zoom-in"
            data-aos-delay={`${i * 200}`}
          >
            <Card
              img={category.image}
              title={category.categoryName}
              desc={category.shortDesc}
              cta="MORE DETAILS"
              onClick={() => {
                router.push(`/products/${category.id}`);
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
