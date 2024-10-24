import React, { useEffect, useState } from "react";

export const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Links = [
    { link: "Home", href: "#home" },
    { link: "Feature", href: "#feature" },
    { link: "About", href: "#about" },
    { link: "Gallery", href: "#gallery" },
    { link: "Review", href: "#review" },
    { link: "Contact", href: "#contact" },
    { link: "V2", href: "#contact" },
  ];
  return (
    <nav
      className={`z-50 relative max-w-full rounded-md flex justify-between p-2 mt-4 items-center mx-2
      ${scrolling
          ? "bg-[#3D8D9A] text-white mx-0 mt-0 transition-all ease-out duration-150"
          : "bg-white"
        }
    `}
    >
      <div className="w-fit h-fit flex items-center">
        <img
          className="w-[128px] h-[64px]"
          src={process.env.PUBLIC_URL + "images/logo.png"}
        />
      </div>
      <div
        className={`absolute lg:static  w-[97%] transition-all ease-in duration-500 ${openMenu
          ? "top-24 opacity-100"
          : "-top-[1000px] md:opacity-100 opacity-0"
          }`}
      >
        <ul
          className={`lg:flex lg:justify-end lg:gap-4 font-bold lg:p-0 p-5 rounded-lg ${scrolling ? "bg-[#3D8D9A] text-white" : "bg-white"
            }`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className={`hover:text-[#6DB2B9] lg:border-b-0 border-b-2 md:mr-2 text-2xl cursor-pointer lg:text-4xl duration-150 my-4 lg:p-0 p-4 ${scrolling ? "hover:text-black" : "lg:hover:bg-white"
                } rounded-lg`}
            >
              <a href={link.href}>{link.link}</a>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="lg:hidden block mr-10"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {!openMenu ? (
          <i className="fa-solid fa-bars fa-2xl"></i>
        ) : (
          <i className="fa-solid fa-xmark fa-2xl"></i>
        )}
      </button>
    </nav>
  );
};
