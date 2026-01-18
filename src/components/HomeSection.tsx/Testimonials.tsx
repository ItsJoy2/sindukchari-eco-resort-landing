"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import HeadingOne from "../shared/heading/HeadingOne";

const manes =
  "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg";

const testimonials = [
  {
    name: "MD Idris",
    date: "June 23, 2022",
    title: "Exceptional",
    rating: 5,
    image: manes,
    text: "With a new concept of space and freedom, we have redefined the idea of luxury, taking it to the highest level, by creating the most stunning luxury resort in Italy. Discover offers crafted to enhance your stay and create unforgettable moments.",
  },
  {
    name: "MD Idris",
    date: "June 23, 2022",
    title: "Exceptional",
    rating: 5,
    image: manes,
    text: "With a new concept of space and freedom, we have redefined the idea of luxury, taking it to the highest level, by creating the most stunning luxury resort in Italy. Discover offers crafted to enhance your stay and create unforgettable moments.",
  },
  {
    name: "MD Idris",
    date: "June 23, 2022",
    title: "Exceptional",
    rating: 5,
    image: manes,
    text: "With a new concept of space and freedom, we have redefined the idea of luxury, taking it to the highest level, by creating the most stunning luxury resort in Italy. Discover offers crafted to enhance your stay and create unforgettable moments.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 overflow-hidden">
      <HeadingOne text="What Customer Say" className="text-center mb-12" />

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        loop
        centeredSlides={true}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: false },
          768: { slidesPerView: 2, centeredSlides: true },
          1024: { slidesPerView: 3, centeredSlides: true },
        }}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div
                className={`h-full w-full rounded-xl bg-white p-8 shadow-sm transition-all duration-500
                  ${isActive ? "opacity-100 scale-100" : "opacity-40 scale-90"}`}
              >
                {/* Header */}
                <div className="mb-4 flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover  size-8"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">“{item.text}”</p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
