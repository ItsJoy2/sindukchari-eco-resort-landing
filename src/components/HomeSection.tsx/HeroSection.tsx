"use client";

import MainContainer from "../shared/container/MainContainer";
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full md:h-175 h-auto bg-no-repeat bg-center text-white scroll-mt-20"
      style={{
        backgroundImage: `url("/background.jpg")`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-10" />
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
