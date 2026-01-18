"use client";

import { Facebook, Instagram, X } from "lucide-react";
import MainContainer from "../shared/container/MainContainer";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNav = (id: string) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-100">
      <MainContainer className="py-4 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 rounded-lg size-8 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="text-xl font-semibold">
                Shindukchari Eco Resort
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              With a new concept of space and freedom, we have redefined the idea
              of luxury, taking it to the highest level, by creating the most
              stunning luxury resort in Italy.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Office</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p>
                Shindukchari, Guimara- 4440, <br /> Khagrachhari, Chattagram,
                Bangladesh
              </p>
              <a
                href="mailto:sinresort@info.com"
                className="block hover:text-white transition-colors"
              >
                sinresort@info.com
              </a>
              <a
                href="tel:+00801817643422"
                className="block hover:text-white transition-colors"
              >
                +008 01817643422
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links</h4>
            <nav className="space-y-2 text-sm">
              <button
                onClick={() => handleNav("home")}
                className="block text-left text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => handleNav("gallery")}
                className="block text-left text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Gallery
              </button>
              <button
                onClick={() => handleNav("about")}
                className="block text-left text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                About
              </button>
              <a
                href="https://sindukchari.travilla.app/login"
                target="_blank"
                className="block text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Investment
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-700 rounded-full p-2.5 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-700 rounded-full p-2.5 transition-colors"
              >
                <X size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-700 rounded-full p-2.5 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-4">
          <p className="text-sm text-slate-400">
            Sindukchari Eco Resort © 2026. All rights reserved.
          </p>
        </div>
      </MainContainer>
    </footer>
  );
}
