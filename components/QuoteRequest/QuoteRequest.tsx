import React from "react";
import { FaReply } from "react-icons/fa";
import { IoCall, IoCallSharp } from "react-icons/io5";

const QuoteRequest = () => {
  return (
    <section>
      <div className="row align-items-stretch">
        <div className="col-md-7">
          <h5 className="clrMain fw-bold">REQUEST A QUOTE</h5>
          <h2 className="text-capitalize fw-bold mb-3">
            Need A Free Quote? Please Feel Free to Contact Us
          </h2>
          <div className="titleAnimation mt-3 mb-5"></div>

          <div className="row g-2 row-cols-2 mt-4 mb-4">
            <div className="col fs-5" data-aos="zoom-in-up" data-aos-delay={200}>
              <FaReply className="clrMain" /> Reply within 24 hours
            </div>
            <div className="col fs-5" data-aos="zoom-in-up" data-aos-delay={300}>
              <IoCall className="clrMain" /> 24 hrs telephone support
            </div>
          </div>

          <p className="text-muted mb-4" data-aos="zoom-in-up" data-aos-delay={400}>
            Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et
            dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos
            vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna
            sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.
          </p>

          <div className="d-flex align-items-center gap-3 mb-4" data-aos="zoom-in-up" data-aos-delay={500}>
            <IoCallSharp className="aboutSection_callIcon" />
            <div className="d-flex flex-column gap-1" >
              <span className="fs-5">Call to ask any question</span>
              <span className="fs-5 clrMain fw-bold">+0109 990 8990</span>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="quoteRequst_wrapper" data-aos="zoom-in">
            <input type="text" className="form-control form-control-lg" placeholder="Your Name" />
            <input type="email" className="form-control form-control-lg" placeholder="Your Email" />
            <select className="form-select form-control-lg" aria-label="Default select example">
              <option className="text-muted">Select a service</option>
              <option value="1">Maintenance</option>
              <option value="2">Compressor</option>
              <option value="3">Diving Accessories</option>
              <option value="4">Diving Suites</option>
            </select>
            <textarea
              className="form-control form-control-lg"
              rows={3}
              placeholder="Message"
            ></textarea>
            <button className="btn btn-warning fw-bold">REQUEST A QUOTE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteRequest;
