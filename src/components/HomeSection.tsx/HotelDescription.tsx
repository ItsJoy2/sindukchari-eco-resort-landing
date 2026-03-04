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
          <div className="w-full h-auto aspect-square overflow-hidden rounded-lg">
            <Image
              className="w-full rounded-lg"
              src={Images.description}
              alt="img"
              width={500}
              height={500}
            />
          </div>
          <div className="w-full space-y-6">
            <HeadingOne
              text=" Luxury and Nature in Perfect Harmony"
              className="text-[#0C0C0D]"
            />
            <p className="text-[]">
              Sindukchari is the hidden gem of Guimara. Our project is designed
              to give you a front-row seat to the most beautiful sunrises and
              misty mornings in Bangladesh.
            </p>
            <ul className="space-y-3">
              {[
                "Breathtaking 3,000ft+ altitude viewpoints.",
                "Guided trekking trails through the Sindukchari hills.",
                "Secure, family-friendly environment with 24/7 surveillance.",
                "Dedicated campfire and BBQ zones for evening gatherings.",
                `Authentic "Pahari" hospitality that makes you feel at home.`,
                "Eco-friendly waste management to preserve the Khagrachari ecosystem.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <IoCheckmarkDoneOutline /> <span>{item}</span>
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
