import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuMailOpen } from "react-icons/lu";
import { IoCall } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer className="mainFooter">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footerForm">
              <div className="footerLogo">
                <img src="/img/logoWhite.png" />
              </div>
              <p className="text-white">
                Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr
                dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et
                kasd eos duo.
              </p>
              {/* <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
                <button className="btn btn-warning" type="button" id="button-addon2">Sign Up</button>
              </div> */}
            </div>
          </div>

          <div className="col">
            <h5 className="text-white">Get In Touch</h5>
            <div className="titleAnimation hover mt-3 mb-5"></div>

            <p>
              <MdOutlineLocationOn className="clrMainHover fs-5 me-2" /> 123 Street, Hurghada, Egypt
            </p>
            <p>
              <LuMailOpen className="clrMainHover fs-5 me-2" /> info@divemix.com
            </p>
            <p>
              <IoCall className="clrMainHover fs-5 me-2" /> +0109 990 8990
            </p>
          </div>

          <div className="col">
            <h5 className="text-white">Quick Links</h5>
            <div className="titleAnimation hover mt-3 mb-5"></div>
            <p>
              <FaLongArrowAltRight className="clrMainHover fs-5 me-2" /> Home
            </p>
            <p>
              <FaLongArrowAltRight className="clrMainHover fs-5 me-2" /> Services
            </p>
            <p>
              <FaLongArrowAltRight className="clrMainHover fs-5 me-2" /> Products
            </p>
            <p>
              <FaLongArrowAltRight className="clrMainHover fs-5 me-2" /> About Us
            </p>
            <p>
              <FaLongArrowAltRight className="clrMainHover fs-5 me-2" /> Contact Us
            </p>
          </div>

          <div className="col">
            <h5 className="text-white">Popular Links</h5>
            <div className="titleAnimation hover mt-3 mb-5"></div>

            <p>
              <FaLongArrowAltRight className="clrMainHover fs-5 me-2" /> Home
            </p>
            <p>
              <FaLongArrowAltRight className="clrMainHover fs-5 me-2" /> Services
            </p>
            <p>
              <FaLongArrowAltRight className="clrMainHover fs-5 me-2" /> Products
            </p>
            <p>
              <FaLongArrowAltRight className="clrMainHover fs-5 me-2" /> About Us
            </p>
            <p>
              <FaLongArrowAltRight className="clrMainHover fs-5 me-2" /> Contact Us
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
