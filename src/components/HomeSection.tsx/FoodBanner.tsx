import { Images } from "@/store/images";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import MainContainer from "../shared/container/MainContainer";
import Descript from "../shared/heading/Descrip";
import HeadingOne from "../shared/heading/HeadingOne";

export default function FoodBanner() {
  return (
    <section
      className="
      overflow-hidden
    relative w-full
    min-h-fit
    md:h-170
    bg-center bg-no-repeat
    bg-cover
    text-white
    pb-5
  "
      style={{ backgroundImage: "url('/foodCardBanner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-10 blur-3xl" />
      <MainContainer className="h-full relative z-20">
        <div className="flex md:flex-row flex-col items-center justify-center gap-5 w-full h-full">
          <div className="flex-1 space-y-5">
            <HeadingOne
              className="text-center"
              text=" A Culinary Journey Above the Clouds"
            />
            <Descript
              className="text-[#FFFFFF]"
              text={`At the Sindukchari Signature Restaurant, every meal comes with a view. Whether it’s a morning coffee amidst the mist or a traditional "Bamboo Chicken" dinner under the stars, we make every bite a memory.`}
            />
            <button className="flex items-center gap-2">
              Explore Our Restaurant <GoArrowRight />
            </button>
          </div>
          <div className="flex-1 flex justify-end w-full">
            <div className="lg:size-130 md:size-80 w-full">
               <Image
                className="w-full h-full aspect-square object-cover"
                src="https://i.ytimg.com/vi/etwglj0yarE/maxresdefault.jpg"
                alt="img"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
