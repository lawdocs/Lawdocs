import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("pathname",pathname);
    window.scrollTo(0, 0); // Scroll to the top when route changes
  }, [pathname]);

  return null;
};

export default ScrollToTop;
