import { Images } from "@/store/images";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import MainContainer from "../shared/container/MainContainer";
import HeadingOne from "../shared/heading/HeadingOne";

export default function HotelDescription() {
  return (
    <section className="md:py-12 py-6">
      <MainContainer>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center ">
          <div className="w-full">
            <Image
              className="w-full"
              src={Images.description}
              alt="img"
              width={500}
              height={500}
            />
          </div>
          <div className="w-full space-y-6">
            <HeadingOne
              text="Luxury and Nature in Harmony"
              className="text-[#0C0C0D]"
            />
            <p className="text-[]">
              With a new concept of space and freedom, we have redefined the
              idea of luxury, taking it to the highest level, by creating the
              most stunning luxury resort in Italy. Discover offers crafted to
              enhance your stay and create unforgettable moments.
            </p>
            <ul className="space-y-3">
              {Array.from({ length: 10 }).map((_, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <IoCheckmarkDoneOutline />{" "}
                  <span>
                    Sindukchari is an emerging tourist attraction in
                    Khagrachari.
                  </span>
                </li>
              ))}
            </ul>
            <button className="flex items-center gap-2">
              Reveal The Details <GoArrowRight />
            </button>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
