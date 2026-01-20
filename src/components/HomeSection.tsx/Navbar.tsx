"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { IoMdMenu } from "react-icons/io";
import MainContainer from "../shared/container/MainContainer";

const menuItems = [
  { label: "Home", id: "home" },
  { label: "Gallery", id: "gallery" },
  { label: "About", id: "about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  const textColor = scrolled ? "text-gray-50" : "text-white";
  const hoverText = scrolled ? "hover:text-gray-100" : "hover:text-gray-100";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        scrolled ? "pt-3 backdrop-blur bg-[#030324] text-white" : "bg-transparent py-5"
      }`}
    >
      <MainContainer>
        <div className="grid grid-cols-3 items-center">
          <div className="flex items-center">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className={`flex items-center gap-2 ${textColor}`}>
                  <IoMdMenu className={`text-xl cursor-pointer ${hoverText}`} />
                  Menu
                </button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="w-72 bg-gray-50 text-gray-90 p-3"
              >
                <nav className="mt-8 space-y-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item.id)}
                      className="block w-full text-left text-lg font-medium hover:text-blue-600 cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                  <a
                    href="https://sindukchari.travilla.app/login"
                    target="_blank"
                    className=""
                  >
                    <button
                      onClick={() => handleNav("investment")}
                      className="block w-full text-left text-lg font-medium hover:text-blue-600 cursor-pointer"
                    >
                      Investment
                    </button>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-30">
              <Image
                className="w-full"
                src="/logo2.png"
                alt="img"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 justify-end">
            <a href="https://wa.me/8801712345678">
              <Button className="bg-[#1DAA61] px-3 sm:px-4 hover:bg-[#127140] cursor-pointer">
                <FaWhatsapp />
                <span className="hidden sm:inline">Call Now</span>
              </Button>
            </a>

            <Link href="/contact">
              <Button className="bg-[#2563EB] hover:bg-[#193e8e] px-3 sm:px-4 cursor-pointer">
                <span className="hidden sm:inline">Contact Us</span>
                <GoArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </MainContainer>

      <div
        className={`border-b mt-3 ${
          scrolled ? "border-[#030324]" : "border-white/50"
        }`}
      />
    </div>
  );
}
