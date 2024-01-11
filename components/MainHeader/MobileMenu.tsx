import React, { useState } from "react";
import { PiListLight } from "react-icons/pi";
import Navigation from "./Navigation";
import HeaderLogo from "./HeaderLogo";

const MobileMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev);
  return (
    <>
      <div className={`d-md-none mobileMenu ${showMobileMenu ? "shown" : ""}`}>
        <Navigation />
      </div>

      {showMobileMenu && (
        <div className="d-md-none mobileMenu_backdrop" onClick={toggleMobileMenu}></div>
      )}

      <PiListLight className="menuToggler d-md-none" onClick={toggleMobileMenu} />
    </>
  );
};

export default MobileMenu;
