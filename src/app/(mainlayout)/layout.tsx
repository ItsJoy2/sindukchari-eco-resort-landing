import Footer from "@/components/HomeSection.tsx/Footer";
import HeroSection from "@/components/HomeSection.tsx/HeroSection";
import { AuthProvider } from "@/provider/MainProvider";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <HeroSection />
      {children}
      <Footer />
    </AuthProvider>
  );
}
