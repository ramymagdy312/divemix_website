import Image from "next/image";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { IoCallSharp } from "react-icons/io5";

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="container">
        <div className="row">
          <div className="content-column col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title">
                <h2 className="text-capitalize fw-bold mb-3">
                  Mission statement
                </h2>
                <div className="text-muted">
                  <strong className="clrMain fw-bold"> DiveMix’s </strong>
                  mission is to offer industry leading compressed air and gas
                  solutions. We have highly competent personnel with
                  unparalleled compressed air knowledge, delivering exceptional
                  customer service with the highest quality products.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="content-column col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title">
                <h2 className="text-capitalize fw-bold mb-3">Our Features</h2>
                <h3>
                  DiveMix promises unmatched customer service to meet the
                  evolving demands of high-pressure gas applications by
                  offering:
                </h3>
              </div>
              <div className="text-muted">• Fast response times.</div>
              <div className="text-muted">
                • Professional maintenance and repair of various types of
                compressors, dryers, O2 / N2 Generators and related equipment by
                experienced manufacturer trained engineers.
              </div>
              <div className="text-muted">
                • Field service vehicles fully equipped with modern tools and
                diagnostic accessories to perform most possible onsite repairs.
              </div>
              <div className="text-muted">
                • Complete system rebuilds or overhauls with load tests.
              </div>
              <div className="text-muted">
                • Genuine manufacturer spare parts.
              </div>
              <div className="text-muted">
                • Hydrostatic test station for Inspecting all types & capacities
                of pressurized cylinders.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
