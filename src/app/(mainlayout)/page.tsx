import BannerTwo from "@/components/HomeSection.tsx/BannerTwo";
import EventBanner from "@/components/HomeSection.tsx/EventBanner";
import FoodBanner from "@/components/HomeSection.tsx/FoodBanner";
import HeroSection from "@/components/HomeSection.tsx/HeroSection";
import HotelDescription from "@/components/HomeSection.tsx/HotelDescription";
import { HotelRoom } from "@/components/HomeSection.tsx/HotelRoom";
import ImageGallery from "@/components/HomeSection.tsx/ImageGallery";
import RecentNews from "@/components/HomeSection.tsx/RecentNews";
import ResortCard from "@/components/HomeSection.tsx/ResortCard";
import Reveal from "@/components/HomeSection.tsx/Reveal";
import Testimonials from "@/components/HomeSection.tsx/Testimonials";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Sindukchari Eco Resort",
//   description: "Sindukchari Eco Resort",
// };
const title = "Sindukchari Eco Resort";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: title,
    description: title,
    keywords: title,
    openGraph: {
      title: title,
      description: title,
      url: "https://sindukchari-eco-resort-landing.vercel.app",
      siteName: "https://sindukchari-eco-resort-landing.vercel.app/",
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "sindukchari",
      type: "website",
    },
  };
}
export default async function HomePage() {
  return (
    <>
      <>
        <Reveal>
          <HeroSection />
        </Reveal>

        <Reveal delay={0.1}>
          <ResortCard />
        </Reveal>

        <Reveal delay={0.15}>
          <HotelRoom />
        </Reveal>

        <Reveal>
          <HotelDescription />
        </Reveal>

        <Reveal>
          <FoodBanner />
        </Reveal>

        <Reveal>
          <Testimonials />
        </Reveal>

        <Reveal>
          <EventBanner />
        </Reveal>

        <Reveal>
          <BannerTwo />
        </Reveal>

        <Reveal>
          <RecentNews />
        </Reveal>

        <Reveal>
          <ImageGallery />
        </Reveal>
      </>
    </>
  );
}
