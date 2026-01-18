import ImageGallery from "@/components/HomeSection.tsx/ImageGallery";
import { Metadata } from "next";
import ContactDetails from "./ContactDetails";
import ContactUsPageComponent from "./ContactUsPageComponent";

export const metadata: Metadata = {
  title: "Sindukchari Eco Resort | Contact",
  description: "Sindukchari Eco Resort",
};

export default async function page() {
  return (
    <div>
      <ContactUsPageComponent />
      <ContactDetails />
      <ImageGallery />
    </div>
  );
}
