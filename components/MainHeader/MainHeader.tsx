"use client";
import HeaderLogo from "./HeaderLogo";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import { useFixedOnScroll } from "./hooks/useFixedOnScroll";

const MainHeader = () => {
  const { headerIsShown } = useFixedOnScroll();

  return (
    <header className={`mainHeader ${headerIsShown ? "shown" : ""}`}>
      <div className="container">
        <div className="mainHeader_innerWrapper">
          <HeaderLogo />
          <div className="d-none d-md-block">
            <Navigation />
          </div>
        </div>
      </div>
      <MobileMenu />
      
    </header>
  );
};

export default MainHeader;
