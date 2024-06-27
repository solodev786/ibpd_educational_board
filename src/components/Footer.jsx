import React from "react";

import { MdLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import LOGO from "../assets/IBPD FOOTER LOGO 13 JUNE.png";
import newLogo from "../assets/ttf.png";
import certLogo from "../assets/us 3.png";
import footerOne from "../assets/footerOne.png";
import footerTwo from "../assets/footerTwo.png";
import footerThree from "../assets/footerThree.png";
import footerFour from "../assets/footerFour.png";
import footerFive from "../assets/footerFive.png";
import { MdDomainVerification } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  //   if (isMobile) {
  //     return (
  // <div className=" w-full h-auto px-5 flex flex-col gap-5 py-5 bg-black text-white">
  //   <div className=" w-full flex justify-center ">
  //     <img className=" opacity-60" src={LOGO} alt="" />
  //   </div>
  //   <div className="w-full flex flex-col gap-5">
  //     <div>
  //       <img src={newLogo} alt="" width={230} />
  //     </div>
  //     <hr className=" border-gray-500" />
  //     <div className=" flex flex-col gap-3">
  //       <div className=" flex items-center flex-wrap gap-1 ">
  //         {/* <img src={certLogo} alt="" width={80} /> */}
  //         <img width={70} src={footerTwo} alt="" />
  //         <img width={100} src={footerFour} alt="" />
  //         <img width={100} src={footerFive} alt="" />
  //         <img width={120} src={footerOne} alt="" />
  //       </div>
  //       <hr className=" border-gray-500" />
  //       <img
  //         className="flex  justify-end mr-[70px]"
  //         width={360}
  //         src={footerThree}
  //         alt=""
  //       />
  //     </div>
  //   </div>

  //   <div
  //     onClick={navToVerification}
  //     className=" w-52 h-12 bg-white text-black rounded-lg flex items-center justify-center  hover:bg-gray-800 hover:text-white cursor-pointer "
  //   >
  //     <h1 className=" flex items-center gap-2">Verify certificate</h1>
  //   </div>

  //   <hr className=" border-gray-500" />
  //   <div className=" flex flex-col gap-5">
  //     <div className=" flex flex-col gap-1">
  //       <h1 className="font-semibold">Address</h1>
  //       <div className=" flex items-start gap-2">
  //         <h1 className=" text-xl">
  //           <MdLocationOn />
  //         </h1>
  //         <h1>Office 128, City Road, London, EC1V 2NX, United Kingdom</h1>
  //       </div>
  //     </div>
  //     <div className=" flex flex-col gap-1">
  //       <h1>Contact us</h1>
  //       <div className=" flex gap-2 items-center">
  //         <h1 className=" text-xl">
  //           <IoMail />
  //         </h1>
  //         <h1>info@ibpd.org</h1>
  //       </div>
  //     </div>
  //   </div>
  //   <hr className=" border-gray-500" />
  //   <div className=" flex items-center gap-10 uppercase w-full justify-center text-xs">
  //     <a href="/term-of-use">
  //       <h1 className="underline cursor-pointer">Terms of use</h1>
  //     </a>
  //     <a href="/privacy-policy">
  //       <h1 className="underline cursor-pointer">Privacy policy</h1>
  //     </a>
  //     <a href="disclaimer">
  //       <h1 className="underline cursor-pointer">Disclaimer</h1>
  //     </a>
  //   </div>

  //   <div>
  //     <h1 className=" text-[11px] w-full justify-center text-center">
  //       Copyright ©2024 IBPD Professional Development Foundation UK
  //     </h1>
  //   </div>
  // </div>
  //     );
  //   }

  return (
    <div>
      <div className="block md:hidden w-full h-auto px-5 flex flex-col gap-5 py-5 bg-black text-white">
        <div className=" w-full flex justify-center ">
          <Image className=" opacity-60" src={LOGO} alt="" />
        </div>
        <div className="w-full flex flex-col gap-5">
          <div>
            <Image src={newLogo} alt="" width={230} />
          </div>
          <hr className=" border-gray-500" />
          <div className=" flex flex-col gap-3">
            <div className=" flex items-center flex-wrap gap-1 ">
              {/* <img src={certLogo} alt="" width={80} /> */}
              <Image width={70} src={footerTwo} alt="" />
              <Image width={100} src={footerFour} alt="" />
              <Image width={100} src={footerFive} alt="" />
              <Image width={120} src={footerOne} alt="" />
            </div>
            <hr className=" border-gray-500" />
            <Image
              className="flex  justify-end mr-[70px]"
              width={360}
              src={footerThree}
              alt=""
            />
          </div>
        </div>

        <Link href={"/VerifyCertificate"}>
          <div
            //   onClick={navToVerification}
            className=" w-52 h-12 bg-white text-black rounded-lg flex items-center justify-center  hover:bg-gray-800 hover:text-white cursor-pointer "
          >
            <h1 className=" flex items-center gap-2">Verify certificate</h1>
          </div>
        </Link>

        <hr className=" border-gray-500" />
        <div className=" flex flex-col gap-5">
          <div className=" flex flex-col gap-1">
            <h1 className="font-semibold">Address</h1>
            <div className=" flex items-start gap-2">
              <h1 className=" text-xl">
                <MdLocationOn />
              </h1>
              <h1>Office 128, City Road, London, EC1V 2NX, United Kingdom</h1>
            </div>
          </div>
          <div className=" flex flex-col gap-1">
            <h1>Contact us</h1>
            <div className=" flex gap-2 items-center">
              <h1 className=" text-xl">
                <IoMail />
              </h1>
              <h1>info@ibpd.org</h1>
            </div>
          </div>
        </div>
        <hr className=" border-gray-500" />
        <div className=" flex items-center gap-10 uppercase w-full justify-center text-xs">
          <Link href="/privacy-policy">
            <h1 className="underline cursor-pointer">Privacy policy</h1>
          </Link>
          <Link href="disclaimer">
            <h1 className="underline cursor-pointer">Disclaimer</h1>
          </Link>
        </div>

        <div>
          <h1 className=" text-[11px] w-full justify-center text-center">
            Copyright ©2024 IBPD Professional Development Foundation UK
          </h1>
        </div>
      </div>
      <div className="hidden md:block">
        <div className=" flex w-full h-auto pt-10 pb-5 px-10 flex-col gap-10  bg-black text-white">
          <div
            className=" bg-opacity-45"
            style={{ backgroundImage: `url(${LOGO})` }}
          >
            <div className="  flex  justify-between  bg-black items-center">
              <div className="   flex flex-col justify-center items-start">
                <div className="  ">
                  <Image
                    className=" opacity-60"
                    src={LOGO}
                    width={300}
                    alt=""
                  />
                </div>
              </div>
              <Link href={"/VerifyCertificate"}>
                <div
                  // onClick={navToVerification}
                  className=" w-full  flex items-end justify-center"
                >
                  <div className=" w-52 h-12 bg-white animate-bounce rounded-lg flex items-center text-black justify-center hover:bg-gray-800 hover:text-white cursor-pointer ">
                    <h1 className=" flex items-center gap-2 font-medium">
                      Verify certificate
                    </h1>
                  </div>
                </div>
              </Link>

              <div className=" flex items-center gap-5 ">
                <div className=" flex items-start gap-2  justify-center text-white ">
                  <div className=" flex flex-col gap-2 ">
                    <h1 className=" font-semibold w-24 ">Quick links</h1>
                    <div className=" text-sm flex flex-col gap-1">
                      <h1
                        className=" cursor-pointer"
                        //   onClick={navToHome}
                      >
                        Home
                      </h1>
                      <h1
                        className=" cursor-pointer"
                        //    onClick={navToAbout}
                      >
                        About
                      </h1>
                      <h1
                        className=" cursor-pointer"
                        //    onClick={navToPartner}
                      >
                        Partners
                      </h1>
                      <h1
                        className=" cursor-pointer"
                        //   onClick={navToPrograms}
                      >
                        Programs
                      </h1>
                      <h1
                        className=" cursor-pointer"
                        //   onClick={navToContact}
                      >
                        Contact
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className=" w-[1px] h-[150px] bg-gray-400"></div>
                    <div className=" flex flex-col gap-2  w-44">
                      {/* <h1>Address</h1> */}
                      <div className=" flex items-center ">
                        <div className=" flex gap-3 items-start">
                          <h1>
                            <MdLocationOn />
                          </h1>
                          <h1 className=" text-sm">
                            Office 128, City Road, <br /> London, EC1V 2NX,{" "}
                            <br /> United Kingdom
                          </h1>
                        </div>
                      </div>
                      <div className=" flex items-center gap-32 ">
                        <div>
                          <div className=" flex gap-3 items-center">
                            <h1>
                              <IoMail />
                            </h1>
                            <h1 className=" text-sm">Info@ibpd.org</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-5 w-full justify-center ">
            <div className=" flex flex-col gap-1">
              <hr className=" border-gray-700" />
              <div className=" w-full flex justify-between items-center">
                <div className=" my-3 mt-8  flex flex-wrap justify-start  items-center gap-4 ">
                  <Image src={newLogo} alt="" width={160} />
                  <Image width={70} src={footerTwo} alt="" />
                  <Image width={100} src={footerFour} alt="" />
                  <Image width={100} src={footerFive} alt="" />
                  {/* <img src={certLogo} alt="" width={80} /> */}
                  <Image width={120} src={footerOne} alt="" />
                </div>
                <Image
                  className="flex  justify-end mr-[70px]"
                  width={260}
                  src={footerThree}
                  alt=""
                />
              </div>
            </div>
            <div className=" flex items-center gap-10 uppercase w-full justify-center text-xs">
              <Link href="/privacy-policy">
                <h1 className="underline cursor-pointer">Privacy policy</h1>
              </Link>
              <Link href="disclaimer">
                <h1 className="underline cursor-pointer">Disclaimer</h1>
              </Link>
            </div>
            <div className=" mt-5  w-full flex justify-center">
              <h1 className=" text-gray-400 text-xs">
                Copyright ©2024 IBPD Professional Development Foundation UK
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
