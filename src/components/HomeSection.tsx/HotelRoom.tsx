"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MainContainer from "../shared/container/MainContainer";
import HeadingOne from "../shared/heading/HeadingOne";
import HeadingTwo from "../shared/heading/HeadingTwo";

const hotelData = [
  {
    id: 1,
    name: "Cloud Crown Suite",
    tag: "Premium",
    description:
      "Our most luxurious offering is situated at the highest point of the resort.",
    features: [
      "360-degree Floor-to-Ceiling Glass Walls",
      "King Size Premium Bed",
      'Private Infinity Balcony with "Cloud-Touch" Access',
      "Complimentary Mini-Bar & Buffet Breakfast",
    ],
    capacity: {
      adults: 2,
      children: 1,
    },
    mainPrice: 15000,
    discountPrice: 12500,
    currency: "BDT",
    priceUnit: "per_night",
  },
  {
    id: 2,
    name: "Misty Valley Deluxe",
    tag: "Couple’s Choice",
    description:
      "Secluded and romantic, designed specifically for honeymooners or couples.",
    features: [
      "East-Facing Balcony for Sunrise Views",
      "Open-concept Sky Shower",
      "Luxury Teakwood Interior",
      "In-room Candlelight Dinner Setup (On Request)",
    ],
    capacity: {
      adults: 2,
      children: 0,
    },
    mainPrice: 11500,
    discountPrice: 9500,
    currency: "BDT",
    priceUnit: "per_night",
  },
  {
    id: 3,
    name: "Heritage Family Villa",
    tag: "Spacious",
    description:
      "A large, two-bedroom cottage designed with traditional Khagrachari tribal aesthetics.",
    features: [
      "Two Interconnected Bedrooms",
      "Large Private Veranda with Hammocks",
      "Mini Library & Board Games Corner",
      "Kid-friendly Amenities",
    ],
    capacity: {
      adults: 4,
      children: 2,
    },
    mainPrice: 18500,
    discountPrice: 16000,
    currency: "BDT",
    priceUnit: "per_night",
  },
  {
    id: 4,
    name: "Forest Whisper Cottage",
    tag: "Eco-Authentic",
    description:
      "Built entirely from treated bamboo and local stones to keep you close to nature.",
    features: [
      "Natural Cross-Ventilation Design",
      "Queen Size Orthopedic Mattress",
      "Direct Access to the Resort’s Private Trekking Trail",
      "Hand-crafted Hillside Decor",
    ],
    capacity: {
      adults: 2,
      children: 0,
    },
    mainPrice: 9000,
    discountPrice: 7500,
    currency: "BDT",
    priceUnit: "per_night",
  },
  {
    id: 5,
    name: "The Peak Panorama Studio",
    tag: "Modern & Sleek",
    description:
      "A minimalist, modern studio for those who want comfort without the fuss of a large villa.",
    features: [
      "Work-from-Mountain Setup (High-speed Wi-Fi)",
      "Large Picture Window facing the Sindukchari Valley",
      "Smart Climate Control",
      "Rainforest Showerhead",
    ],
    capacity: {
      adults: 2,
      children: 0,
    },
    mainPrice: 10500,
    discountPrice: 8500,
    currency: "BDT",
    priceUnit: "per_night",
  },
  {
    id: 6,
    name: "Solo Explorer’s Nest",
    tag: "Adventure",
    description:
      "A cozy, budget-friendly pod for the solo traveler or photographer.",
    features: [
      "Single Comfortable Bed",
      "Dedicated Camera/Gear Charging Station",
      "Compact Balcony with Binocular Access",
      "Shared Access to the Stargazing Deck",
    ],
    capacity: {
      adults: 1,
      children: 0,
    },
    mainPrice: 5500,
    discountPrice: 4500,
    currency: "BDT",
    priceUnit: "per_night",
  },
];

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
        <div className="md:hidden block">
          <HeadingOne
            className="text-center"
            text="A Best Place to Enjoy Your Life"
          />
        </div>
        <div className="md:block hidden">
          <HeadingOne
            className="text-center"
            text="A Best Place to Enjoy Your"
          />
          <HeadingOne className="text-center" text="Life" />
        </div>
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
              className="package-swiper"
            >
              {hotelData.map((item, index) => (
                <SwiperSlide key={index} className="group">
                  <Link href="/resort/123">
                    <div className="bg-white rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100">
                      {/* Image Wrapper */}
                      <div className="overflow-hidden">
                        <Image
                          src="https://images.pexels.com/photos/30835932/pexels-photo-30835932/free-photo-of-serene-hotel-room-with-mountain-view.jpeg"
                          alt="img"
                          width={500}
                          height={500}
                          className="rounded-t-md transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-4">
                        <HeadingTwo
                          text={`${item.name} (${item.tag})`}
                          className="mt-2 font-semibold md:text-[18px] truncate group-hover:text-[#D85707] transition-colors duration-300"
                        />

                        <div className="text-gray-500 mt-2 space-y-2">
                          <p className="flex items-center gap-1">
                            <IoPeopleOutline />
                            {item.capacity.adults > 0 && (
                              <span>{item.capacity.adults} Adult</span>
                            )}
                            {item.capacity.children > 0 && (
                              <span>{item.capacity.children} Child</span>
                            )}
                          </p>

                          <p className="space-x-2">
                            <span>1 Night</span>
                            <span className="text-[#D85707] line-through">
                              BDT {Number(item.mainPrice).toLocaleString()}
                            </span>
                            <span className="text-black font-semibold">
                              BDT {Number(item.discountPrice).toLocaleString()}
                            </span>
                          </p>

                          {/* Booking Button */}
                          <button className="text-blue-600 flex items-center gap-2 transition-all duration-300 group-hover:gap-4 group-hover:text-[#D85707]">
                            <span>Booking Now</span>
                            <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
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
