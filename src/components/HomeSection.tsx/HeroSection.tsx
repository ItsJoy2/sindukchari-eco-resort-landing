"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { IoMdMenu } from "react-icons/io";
import MainContainer from "../shared/container/MainContainer";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full md:h-175 h-auto bg-no-repeat bg-center text-white"
      style={{
        backgroundImage: `url("/background.jpg")`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
          scrolled ? "pt-3 backdrop-blur bg-gray-600" : "bg-transparent py-5"
        }`}
      >
        <MainContainer>
          <div className="grid grid-cols-3 items-center justify-between">
            <h6 className="flex items-center gap-1.5">
              <IoMdMenu />
              <span className="hidden sm:inline">Menu</span>
            </h6>

            <h6 className="text-sm sm:text-base text-center ">
              Shindukchari Eco Resort
            </h6>

            <div className="flex items-center gap-2 sm:gap-3 justify-end">
              <Button className="bg-[#1DAA61] px-3 sm:px-4">
                <FaWhatsapp />
                <span className="hidden sm:inline">Call Now</span>
              </Button>
              <Button className="bg-[#2563EB] px-3 sm:px-4">
                <span className="hidden sm:inline">Contact Us</span>
                <GoArrowRight />
              </Button>
            </div>
          </div>
        </MainContainer>
        <div className="border-b border-white/50 mt-3" />
      </div>

      <MainContainer className="relative z-20 flex items-center justify-center h-full pt-32  pb-5">
        <div className="text-center md:text-left w-310 mx-auto">
          <h4 className="text-4xl md:text-[86px] leading-tight md:block hidden">
            Welcome to Shindukchari Resort
            <span className="lg:hidden sm:block hidden">Ultimate Getaway</span>
          </h4>

          <h4 className="text-4xl md:text-[86px] text-center md:hidden block ">
            Welcome to Shindukchari Resort Ultimate Getaway
          </h4>

          <div className="mt-6 flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
            <p className="lg:w-2/5 w-full text-sm md:text-base">
              With a new concept of space and freedom, we have redefined the
              idea of luxury, taking it to the highest level, by creating the
              most stunning luxury resort. Discover offers crafted to enhance
              your stay and create unforgettable moments.
            </p>

            <h4 className="text-4xl md:text-[86px] flex-1 text- lg:block hidden">
              Ultimate Getaway
            </h4>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
