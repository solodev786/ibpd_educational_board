"use client";
import React, { useEffect, useRef, useState } from "react";
import LOGO from "../assets/modifiedLogo3.png";
import { IoMenu } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isMenuIconsclicked, setisMenuIconsclicked] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef(null);

  const { inView, ref } = useInView({
    threshold: 0,
  });
  const logoRef = useRef();
  const menuAnim = useRef();

  useEffect(() => {
    setMenuHeight(isMenuIconsclicked ? menuRef.current.scrollHeight : 0);
  }, [isMenuIconsclicked]);

  const toggleMenu = () => {
    setisMenuIconsclicked(!isMenuIconsclicked);
  };
  return (
    <div>
      <div ref={ref} className=" w-full ">
        <div className=" ">
          <div className=" bg-black flex items-center  justify-between px-5 md:w-full md:bg-transparent md:h-full md:px-10 md:flex  md:justify-between">
            <Link href={"/"}>
              <div
                ref={logoRef}
                style={{ transitionDuration: "0.5s" }}
                //   onClick={navToHome}
                className=" w-32 flex items-center  h-32 md:w-40 md:h-44 bg-black md:bg-opacity-75 md:flex md:items-center md:justify-center drop-shadow-lg"
              >
                <Image
                  src={LOGO}
                  alt=""
                  className="w-40 h-40 md:w-60 md:h-60 object-cover"
                />
              </div>
            </Link>
            <div className=" text-white md:hidden ">
              <h1 onClick={toggleMenu} className=" text-5xl">
                <IoMenu />
              </h1>
            </div>
            <div
              ref={menuAnim}
              style={{ transitionDuration: "0.5s" }}
              className="hidden md:py-10 md:block"
            >
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="657"
                  height="60"
                  viewBox="0 0 690 61"
                  fill="none"
                >
                  <path
                    d="M42.1844 0H657V71H0L42.1844 0Z"
                    fill="black"
                    fillOpacity="0.83"
                  />
                </svg>
                <div className="absolute bottom-0  w-full h-full flex items-center justify-center text-white">
                  <div className=" flex gap-8 items-center">
                    <Link href={"/"}>
                      <span
                        className=" hover:text-blue-200 cursor-pointer hover:underline"
                        //   onClick={navToHome}
                      >
                        Home
                      </span>
                    </Link>
                    <Link href={"/about"}>
                      <span
                        className=" hover:text-blue-200 cursor-pointer hover:underline"
                        //   onClick={navToAbout}
                      >
                        About us
                      </span>
                    </Link>
                    <Link href={"/partner"}>
                      <span
                        className=" hover:text-blue-200 cursor-pointer hover:underline"
                        //   onClick={navToPartner}
                      >
                        Partners
                      </span>
                    </Link>
                    <Link href={"/program"}>
                      <span
                        className=" hover:text-blue-200 cursor-pointer hover:underline"
                        //   onClick={navToPrograms}
                      >
                        Programs
                      </span>
                    </Link>
                    <Link href={"/contact"}>
                      <span
                        className=" hover:text-blue-200 cursor-pointer hover:underline"
                        //   onClick={navToContact}
                      >
                        Contact
                      </span>
                    </Link>
                    <Link href={"/payment"}>
                      <span
                        className=" hover:text-blue-200 cursor-pointer hover:underline"
                        //   onClick={navToPayment}
                      >
                        Payment
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={menuRef}
            className="w-full h-80 overflow-hidden mb-5 "
            style={{
              height: `${menuHeight}px`,
              transition: "height 0.3s ease-in-out",
            }}
          >
            <div className=" w-full   py-5 bg-white flex items-center justify-start px-5  md:hidden">
              <div className=" flex flex-col gap-2 w-full">
                <Link href={"/"}>
                  <h1
                    // onClick={navToHome}
                    className=" text-xl font-semibold"
                  >
                    Home
                  </h1>
                </Link>
                <hr className=" " />
                <Link href={"/about"}>
                  <h1
                    // onClick={navToHome}
                    className=" text-xl font-semibold"
                  >
                    About us
                  </h1>
                </Link>
                <hr />
                <Link href={"/partner"}>
                  <h1
                    // onClick={navToHome}
                    className=" text-xl font-semibold"
                  >
                    Partners
                  </h1>
                </Link>
                <hr />
                <Link href={"/program"}>
                  <h1
                    // onClick={navToPrograms}
                    className=" text-xl font-semibold"
                  >
                    Programs
                  </h1>
                </Link>
                <hr />
                <Link href={"/contact"}>
                  <h1
                    // onClick={navToContact}
                    className=" text-xl font-semibold"
                  >
                    Contact
                  </h1>
                </Link>
                <hr />
                <Link href={"/payment"}>
                  <h1
                    // onClick={navToPayment}
                    className=" text-xl font-semibold"
                  >
                    Payment
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
