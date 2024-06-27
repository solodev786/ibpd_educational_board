"use client";
import bg from "../../assets/homebg.webp";
import bookMark from "../../assets/bookmark.png";
import moblieBg from "../../assets/mobile_homebg.webp";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

function Section_one() {
  return (
    <div>
      <div className=" md:w-full  bg-black relative">
        <div className="w-full h-screen  bg-cover  md:w-full md:h-[1000px] md:bg-cover relative ">
          <motion.div
            initial={{ scale: 1.3, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute w-full h-screen md:h-[1000px]"
          >
            <Image
              src={bg}
              alt="bg"
              className=" w-full h-full hidden md:block object-cover"
            />
            <Image
              src={moblieBg}
              alt="bg"
              className=" w-full h-full block md:hidden"
            />
          </motion.div>
          <div className=" absolute top-0 left-0 w-full h-full">
            <Navbar />

            <div className=" h-3/4 md:h-2/4 flex items-center justify-between ">
              <div className=" w-96  md:flex md:justify-start  md:w-[600px] md:px-10   md:h-auto pb-10  bg-black bg-opacity-50 flex">
                <div className=" flex flex-col gap-2 text-white">
                  <Image
                    className="hidden md:block md:drop-shadow-lg"
                    src={bookMark}
                    width={30}
                    alt=""
                  />
                  <div className=" gap-2 px-10 md:px-0 pb-10 flex flex-col md:gap-5 py-5 md:py-0">
                    <motion.div
                      initial={{ x: -200, opacity: -10 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className=" flex md:text-left flex-col text-2xl md:text-4xl md:tracking-wider md:leading-[45px] font-semibold">
                        <h1>Ignite your career,</h1>
                        <h1> illuminate your future</h1>
                      </div>
                    </motion.div>
                    <h1 className=" w-[320px] text-sm md:text-base md:w-[500px] md:text-justify ">
                      Embark on a transformative experience with IBPD where
                      expertise meets aspiration, crafting futures of
                      unparalleled success. Your success story starts here
                    </h1>
                    {/* <div
                  style={{ transitionDuration: "0.3s" }}
                  className=" w-44 h-12 flex items-center justify-start px-5 bg-gray-100  rounded-md text-black hover:bg-black hover:text-white cursor-pointer"
                >
                  <h1 className=" flex items-center gap-2 font-medium">
                    Send an EOI{" "}
                    <span className=" text-xl">
                      <MdKeyboardDoubleArrowRight />
                    </span>
                  </h1>
                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_one;
