import { useState, useEffect } from "react";

export const useFixedOnScroll = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [headerIsShown, setHeaderIsShown] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobileView(window.innerWidth <= 768);
      setHeaderIsShown(window.innerWidth <= 768);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (isMobileView) {
        setHeaderIsShown(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      } else {
        setHeaderIsShown(currentScrollPos > 5);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return { headerIsShown, isMobileView };
};
