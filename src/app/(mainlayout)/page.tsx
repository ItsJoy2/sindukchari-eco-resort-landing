import BannerTwo from "@/components/HomeSection.tsx/BannerTwo";
import EventBanner from "@/components/HomeSection.tsx/EventBanner";
import FoodBanner from "@/components/HomeSection.tsx/FoodBanner";
import HeroSection from "@/components/HomeSection.tsx/HeroSection";
import HotelDescription from "@/components/HomeSection.tsx/HotelDescription";
import { HotelRoom } from "@/components/HomeSection.tsx/HotelRoom";
import ImageGallery from "@/components/HomeSection.tsx/ImageGallery";
import RecentNews from "@/components/HomeSection.tsx/RecentNews";
import ResortCard from "@/components/HomeSection.tsx/ResortCard";
import Testimonials from "@/components/HomeSection.tsx/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sindukchari Eco Resort",
  description: "Sindukchari Eco Resort",
};
export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <ResortCard />
      <HotelRoom />
      <HotelDescription />
      <FoodBanner />
      <Testimonials />
      <EventBanner />
      <BannerTwo />
      <RecentNews />
      <ImageGallery />
    </>
  );
}
