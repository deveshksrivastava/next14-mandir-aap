"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styles from "./links/links.module.css";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


const Header = () => {
  //   const { t } = useTranslation();

  const currentPath = usePathname();
    console.log(currentPath);
  const dropdownRef = useRef(null);
  const [clickedLabel, setClickedLabel] = useState(
    typeof localStorage !== 'undefined' ? localStorage.getItem("label") || "" : ""
  );
  const [clickedNavLabel, setClickedNavLabel] = useState(
    typeof localStorage !== 'undefined' ? localStorage.getItem("navlabel") || "" : ""
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const [open, setOpen] = useState(false);
  const navLinks = [
    // Your navLinks array
    {
      title: "Home",
      // label: `${t("Home")}`,
      path: "/",
      dropdown: undefined,
    },
    {
      // label:`${t("Service")}`,
      title: "Service",
      path: "#",
      dropdown: [
        {
          // label:`${t("serviced1")}`,
          title: "Our Mission",
          path: "/service/our-mission",
        },
        {
          // label:`${t("serviced2")}`,
          title: "plan-a-visit",
          path: "/service/data-upload",
        },
      ],
    },
    {
      // label:`${t("Help")}`,
      title: "About",
      path: "#",
      dropdown: [
        {
          // label:`${t("helpd1")}`,
          title: "About US",
          path: "/about",
        },
        {
          // label:`${t("helpd3")}`,
          title: "FAQS",
          path: "/faqs",
        },
      ],
    },
    {
      // label:`${t("Contact-Us")}`,
      title: "Contact Us",
      path: "/contact",
      dropdown: undefined,
    },
  ];

  const handleItemClick = (title, index) => {
    localStorage.setItem("navlabel", title);
    setClickedNavLabel(title);
    setIsDropdownOpen(!isDropdownOpen);
    setActiveIndex(index);
  };

  const handleItemtitleClick = (title) => {
    localStorage.setItem("label", title);
    setClickedLabel(title);
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setIsDropdownOpen(true);
  }, [clickedLabel]);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="justify-between  shadow-md ">
      <div
        className="flex  bg-site-color px-2 py-2 justify-center items-center"
        id="navbar"
        ref={dropdownRef}
      >
        <ul className="sm:flex hidden md:p-0 md:flex-row md:space-x-8 mt-0 mb-[3px] ">
          {navLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => handleItemtitleClick(link.title)}
            //   onMouseOver={() => handleItemtitleClick(link.title)}
            >
              <Link
                href={`${link.path}`}
                className={`${
                  currentPath === link.path && clickedLabel === link.title
                    ? "border-b-[4px] p-2 border-b-zinc-100 hover:text-white bg-black bg-opacity-50 text-white"
                    : clickedLabel === link.title && currentPath !== link.path
                    ? "border-b-[4px] p-2 border-b-zinc-100 hover:text-white bg-black bg-opacity-50 text-white"
                    : "p-2 text-white hover:border-b-[4px] hover:bg-black hover:bg-opacity-50 border-b-zinc-100 hover:text-white transition duration-10000 ease-in-out"
                }`}
              >
                {link.title}
              </Link>

              {link.dropdown && (
                <div
                  className={`absolute  mt-[15px]  flex flex-col w-[200px] flex-wrap text-center bg-white shadow-lg z-10 ${
                    isDropdownOpen && clickedLabel === link.title
                      ? ""
                      : "hidden"
                  }`}
                >
                  {link.dropdown.map((subNavLink, index) => (
                    <div
                      key={index}
                      className={`relative item-start ${
                        activeIndex === index &&
                        clickedNavLabel === subNavLink.title &&
                        "hover:text-white bg-black bg-opacity-50 text-white"
                      } `}
                    >
                      {subNavLink.path !== undefined && (
                        <section
                          className={`text-center ${
                            clickedLabel === "Service"
                              ? "mr-[0px]"
                              : clickedLabel === "Help"
                              ? "mr-10"
                              : ""
                          }  underline cursor-pointer py-3 text-red-500 `}
                          onClick={() =>
                            handleItemClick(subNavLink.title, index)
                          }
                        >
                          <Link
                            href={`${subNavLink.path}`}
                            className={`p-2 text-black`}
                          >
                            {subNavLink.title}
                          </Link>
                        </section>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <Image
          className={`flex sm:hidden`}
          src="/menu.png"
          alt=""
          width={30}
          height={30}
          onClick={() => setOpen((prev) => !prev)}
        />
        {open && (
          <div className={`${styles.mobileLinks} absolute top-[100px] right-0 w-full bg-black  sm:bg-transparent`}>
            {/* {navLinks.map((link) => (

            <NavLink item={link} key={link.title} />
          ))} */}
            <ul className="sm:hidden w-full flex flex-col text-center gap-5 ">
              {navLinks.map((link, index) => (
                <li key={index} className="">
                  <Link
                    href={`${link.path}`}
                    className={`${
                      currentPath === link.path && clickedLabel === link.title
                        ? "border-b-[4px] p-2 border-b-zinc-100 w-full hover:text-white bg-red-500 bg-opacity-50 text-white"
                        : clickedLabel === link.title &&
                          currentPath !== link.path
                        ? "border-b-[4px] p-2 border-b-zinc-100 hover:text-white bg-black bg-opacity-50 text-white"
                        : "p-2 text-white hover:border-b-[4px] hover:bg-black hover:bg-opacity-50 border-b-zinc-100 hover:text-white transition duration-10000 ease-in-out"
                    }`}
                  >
                    {link.title}
                  </Link>

                  {link.dropdown && (
                    <div
                    //   className={
                    //     ` top-full left-0 mt-2 w-full text-center bg-white shadow-lg z-10 ${
                    //         isDropdownOpen &&   clickedLabel === link.title
                    //       ? ""
                    //       : "hidden"
                    //   }`
                    //   }
                    >
                      {link.dropdown.map((subNavLink, index) => (
                        <div
                          key={index}
                          className={`relative item-start ${
                            activeIndex === index &&
                            clickedNavLabel === subNavLink.title &&
                            "hover:text-white bg-black bg-opacity-50 text-white"
                          } `}
                        >
                          {subNavLink.path !== undefined && (
                            <section
                              className={`text-center ${
                                clickedLabel === "Service"
                                  ? "mr-[0px]"
                                  : clickedLabel === "Help"
                                  ? "mr-10"
                                  : ""
                              } underline cursor-pointer py-3 text-red-500 `}
                              onClick={() =>
                                handleItemClick(subNavLink.title, index)
                              }
                            >
                              <Link
                                href={`${subNavLink.path}`}
                                className={`p-2 text-white`}
                              >
                                {subNavLink.title}
                              </Link>
                            </section>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
