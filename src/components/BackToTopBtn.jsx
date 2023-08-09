import React, { useEffect, useState } from "react";

export const BackToTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    const handleShowBtn = () => {
      if (window.scrollY > 1024) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener("scroll", handleShowBtn);
    return () => {
      window.removeEventListener("scroll", handleShowBtn);
    };
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showBtn && (
      <div
        onClick={handleGoToTop}
        className="bg-black rounded-full p-5 fixed right-32 bottom-10 z-50 w-fit"
      >
        <button type="button">
          <i className="fa-solid fa-arrow-up fa-2xl text-white"></i>
        </button>
      </div>
    )
  );
};
