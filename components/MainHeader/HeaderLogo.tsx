import React from "react";
import { useFixedOnScroll } from "./hooks/useFixedOnScroll";
import Logo from "../Logo";
import LogoWhite from "../LogoWhite";

const HeaderLogo = () => {
  const { headerIsShown, isMobileView } = useFixedOnScroll();

  if (isMobileView) {
    return <Logo />;
  } else {
    if (headerIsShown) {
      return <Logo />;
    } else {
      return <LogoWhite />;
    }
  }
};

export default HeaderLogo;
