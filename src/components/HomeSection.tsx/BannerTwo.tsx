import { Images } from "@/store/images";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import MainContainer from "../shared/container/MainContainer";
import HeadingOne from "../shared/heading/HeadingOne";

export default function BannerTwo() {
  return (
    <section className="md:py-12 py-6 text-white">
      <MainContainer>
        <div className="bg-[#2563EB] md:p-6 p-3 flex items-center md:px-12 gap-10">
          <div className="w-8/12">
            <HeadingOne
              className="text-[18px]"
              text="A smart investment that rewards you with lifetime vacations and steady income."
            />
            <button className="flex items-center gap-2 bg-white text-black px-4 rounded-full mt-3">
              Explore Now <GoArrowRight />
            </button>
          </div>
          <Image
            className="w-4/12 aspect-square rounded"
            src={Images.bannerTwo}
            alt="img"
            width={500}
            height={500}
          />
        </div>
      </MainContainer>
    </section>
  );
}
