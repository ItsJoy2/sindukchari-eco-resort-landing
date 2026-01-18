"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { LuUtensilsCrossed } from "react-icons/lu";
import { TbBed } from "react-icons/tb";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MainContainer from "../shared/container/MainContainer";
import HeadingOne from "../shared/heading/HeadingOne";
import HeadingTwo from "../shared/heading/HeadingTwo";

export function HotelRoom() {
  const products = Array.from({ length: 6 });
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="w-full py-5 bg-[#F9FBFF]">
      <MainContainer className="overflow-hidden">
        <HeadingOne className="text-center" text="A Best Place to Enjoy Your" />
        <HeadingOne className="text-center" text="Life" />
        <div className="mt-3 relative w-full mx-auto overflow-">
          <div className="w-full mx-auto">
            <Swiper
              key={`swiper-${products.length}`}
              loop={false}
              slidesPerView={1}
              spaceBetween={1}
              onSwiper={handleSwiperInit}
              onSlideChange={handleSlideChange}
              navigation={{
                nextEl: ".popular-swiper-next-button",
                prevEl: ".popular-swiper-prev-button",
              }}
              breakpoints={{
                120: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Navigation]}
              className=""
            >
              {products.map((_, index) => (
                <SwiperSlide key={index} className="bg-white rounded-b-md">
                  <Link href="/resort/123">
                    <div className="rounded-md">
                      <Image
                        src="https://images.pexels.com/photos/30835932/pexels-photo-30835932/free-photo-of-serene-hotel-room-with-mountain-view.jpeg"
                        alt="img"
                        width={500}
                        height={500}
                        className="rounded-t-md"
                      />
                      <div className="p-3">
                        <HeadingTwo
                          text="Single Room"
                          className="mt-2 font-medium"
                        />
                        <div className="text-gray-500">
                          <p className="flex items-center gap-1">
                            <IoPeopleOutline /> 2 Adult 1 Child
                          </p>
                          <p className="flex items-center gap-1">
                            <LuUtensilsCrossed /> Buffet Breakfast
                          </p>
                          <p className="flex items-center gap-1">
                            <TbBed /> Twin Bed
                          </p>
                          <p className="space-x-2">
                            <span>2 Night</span>{" "}
                            <span className="text-[#D85707] line-through">
                              BDT {Number(10500).toLocaleString()}
                            </span>
                            <span className="text-black">
                              BDT {Number(8000).toLocaleString()}
                            </span>
                          </p>
                          <button className="text-blue-500 bg-white hover:bg-transparent flex items-center gap-3">
                            <span>Booking Now</span> <GoArrowRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="absolute top-2/5 -left-4 -right-4 flex justify-between z-10 -translate-y-1/2">
            <button
              className={`popular-swiper-prev-button size-9 p-2 rounded-full transition-all duration-300 ${
                isBeginning
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white shadow-md hover:bg-blue-500 hover:text-white hover:scale-110 cursor-pointer"
              }`}
              disabled={isBeginning}
            >
              <FaChevronRight className="size-full rotate-180" />
            </button>
            <button
              className={`popular-swiper-next-button size-9 p-2 rounded-full transition-all duration-300 ${
                isEnd
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white shadow-md hover:bg-blue-500 hover:text-white hover:scale-110 cursor-pointer"
              }`}
              disabled={isEnd}
            >
              <FaChevronRight className="size-full" />
            </button>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
