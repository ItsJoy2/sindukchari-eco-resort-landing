import { GoArrowRight } from "react-icons/go";
import MainContainer from "../shared/container/MainContainer";
import Descript from "../shared/heading/Descrip";
import HeadingOne from "../shared/heading/HeadingOne";

export default function EventBanner() {
  return (
    <section
      className="relative w-full md:h-170 py-20 h-auto bg-no-repeat bg-center text-white"
      style={{
        backgroundImage: `url("/hotelBackground.jpg")`,
        backgroundSize: "100% 100%",
      }}
    >
      <MainContainer className="h-full">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center h-full w-full py-3">
          <div className="md:w-130 w-full bg-white md:p-12 p-8 space-y-6">
            <HeadingOne text="Meetings And Events" className="text-[#0C0C0D]" />
            <Descript
              text="With a new concept of space and freedom, we have redefined the
              idea of luxury, taking it to the highest level, by creating the
              most stunning luxury resort in Italy. Discover offers crafted to
              enhance."
            />
            <a href="https://sindukchari.travilla.app/login" target="_blank">
              <button className="flex items-center gap-1 text-[#ffffff] bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-800/80 cursor-pointer">
                Explore Now <GoArrowRight />
              </button>
            </a>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
