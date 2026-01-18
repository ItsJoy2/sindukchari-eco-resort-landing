"use client";
import { cn } from "@/lib/utils";
import { Images } from "@/store/images";
import Image from "next/image";
import MainContainer from "../shared/container/MainContainer";
import HeadingOne from "../shared/heading/HeadingOne";
import HeadingTwo from "../shared/heading/HeadingTwo";

export default function RecentNews() {
  return (
    <section className="md:py-12 py-6">
      <MainContainer>
        <HeadingOne
          text="Recent news And "
          className="text-center font-medium"
        />
        <HeadingOne text="articles" className="text-center font-medium mb-8" />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {[Images.news2, Images.news1, Images.news3].map((item, idx) => (
            <div>
              <Image
                className={cn(
                  idx === 0
                    ? "h-90 w-full object-cover"
                    : idx === 1
                    ? "h-100 w-full object-cover"
                    : idx === 2
                    ? "h-120 w-full object-cover"
                    : ""
                )}
                src={item}
                alt="img"
                width={500}
                height={500}
              />
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-black" />
                <h4 className="font-medium">Resort</h4>
                <p className="text-gray-600">January 5, 2026</p>
              </div>
              <HeadingTwo className="font-normal" text="Croporate program from Dhaka With Full Event 2026" />
            </div>
          ))}
        </div>
      </MainContainer>
    </section>
  );
}
