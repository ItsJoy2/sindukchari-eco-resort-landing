import Footer from "@/components/HomeSection.tsx/Footer";
import Navbar from "@/components/HomeSection.tsx/Navbar";
import { AuthProvider } from "@/provider/MainProvider";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <Navbar />
      {children}
      <Footer />
    </AuthProvider>
  );
}
