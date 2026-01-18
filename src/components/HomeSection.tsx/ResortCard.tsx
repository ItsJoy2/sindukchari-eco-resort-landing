"use client";

import { Button } from "@/components/ui/button";
import { Images } from "@/store/images";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MainContainer from "../shared/container/MainContainer";
import Descript from "../shared/heading/Descrip";
import HeadingOne from "../shared/heading/HeadingOne";
import HeadingTwo from "../shared/heading/HeadingTwo";

const cardData = [
  {
    id: 1,
    icon: Images.hotelCard2,
    title: "Cetaring And Dining",
    descirption:
      "Consectetur adipiscing elit, sed do eiusm od tempor incidunt ut labore.",
  },
  {
    id: 2,
    icon: Images.hotelCard3,
    title: "Cetaring Rooms",
    descirption:
      "Consectetur adipiscing elit, sed do eiusm od tempor incidunt ut labore.",
  },
  {
    id: 3,
    icon: Images.hotelCard1,
    title: "Private Resorts",
    descirption:
      "Consectetur adipiscing elit, sed do eiusm od tempor incidunt ut labore.",
  },
];

export default function ResortCard() {
  return (
    <section id="about" className="md:py-12 py-6 scroll-mt-20">
      <MainContainer>
        <HeadingOne
          text="Special attractions of the"
          className="text-center font-medium"
        />
        <HeadingOne text="resort" className="text-center font-medium mb-8" />

        <Swiper
          spaceBetween={20}
          breakpoints={{
            120: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          centeredSlides
          initialSlide={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          {cardData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group relative h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex justify-center mb-4">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={60}
                    height={60}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <HeadingTwo text={item.title} className="text-center mb-2" />
                <Descript
                  text={item.descirption}
                  className="text-center mb-6"
                />

                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 opacity-80 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    Read More
                    <GoArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </MainContainer>
    </section>
  );
}
