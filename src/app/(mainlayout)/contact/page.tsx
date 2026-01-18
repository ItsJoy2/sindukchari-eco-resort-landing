import ImageGallery from "@/components/HomeSection.tsx/ImageGallery";
import { Metadata } from "next";
import ContactDetails from "./ContactDetails";
import ContactUsPageComponent from "./ContactUsPageComponent";
import HeroSection from "@/components/HomeSection.tsx/HeroSection";

export const metadata: Metadata = {
  title: "Sindukchari Eco Resort | Contact",
  description: "Sindukchari Eco Resort",
};

export default async function page() {
  return (
    <div>
      <HeroSection />
      <ContactUsPageComponent />
      <ContactDetails />
      <ImageGallery />
    </div>
  );
}
