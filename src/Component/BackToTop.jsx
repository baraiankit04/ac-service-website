import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={goToTop}
      className="btn btn-primary rounded-circle shadow position-fixed"
      style={{
        right: "20px",
        bottom: "160px",
        width: "50px",
        height: "50px",
        zIndex: 9998,
      }}
      aria-label="Back to top"
      title="Back to Top"
    >
      ↑
    </button>
  );
};

export default BackToTop;