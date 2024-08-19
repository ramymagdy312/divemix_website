"use client";
import PageBanner from "@/components/PageBanner";
import React from "react";
import categories from "@/data/products.json";
import Slider from "react-slick";
import Image from "next/image";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Page = ({ params }: { params: { categoryId: string } }) => {
  const categoryId = params.categoryId;
  const products = categories.find((cat) => cat.id == categoryId);

  return (
    <main>
      {params.categoryId}
      <PageBanner adddress={`${products?.categoryName} Products`} />

      <div className="container">
        <div className="homeSection">
          <div className="row mt-5 gap-5">
            {products?.products.map((category, i) => (
              <div key={i} className="col-md-12">
                <div
                  className={`d-flex align-items-center gap-4 flex-column flex-md-row ${
                    i % 2 != 0 && "flex-md-row-reverse"
                  }`}
                >
                  <div className="w-50">
                    <h2 className="fw-bold">{category.name}</h2>
                    <p>{category.desc}</p>
                  </div>

                  <div className="w-50">
                    <Slider {...sliderSettings}>
                      {category.images.map((slice, i) => (
                        <div>
                          <div className="productCard">
                            <Image
                              key={i}
                              src={slice}
                              alt=""
                              fill
                              // width={200}
                              // height={800}
                            />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
