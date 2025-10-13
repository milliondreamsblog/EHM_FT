import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // small timeout to ensure the DOM is rendered
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    } else {
      // when no hash, scroll to top
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHashElement;
