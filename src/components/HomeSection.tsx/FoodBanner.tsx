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
              text="We offer all types of travel service"
            />
            <Descript
              className="text-[#FFFFFF]"
              text="With a new concept of space and freedom, we have redefined the idea
            of luxury, taking it to the highest level, by creating the most
            stunning luxury resort in Italy. Discover offers crafted to enhance
            your stay and create unforgettable moments."
            />
            <button className="flex items-center gap-2">
              Explore Our Restaurant <GoArrowRight />
            </button>
          </div>
          <div className="flex-1 flex justify-end w-full">
            <div className="lg:size-130 md:size-80 w-full">
              <Image
                className="w-full h-full aspect-square object-cover"
                src={Images.food1}
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
