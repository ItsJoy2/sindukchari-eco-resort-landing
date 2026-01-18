"use client";

import MainContainer from "@/components/shared/container/MainContainer";
import { Phone, MapPin, Mail } from "lucide-react";

export default function ContactDetails() {
  return (
    <section className="w-full bg-white py-10">
      <MainContainer className="grid grid-cols-12 gap-5">
        <div className="space-y-4 h-fit md:col-span-4 col-span-12">
          <div className="flex items-start gap-4 rounded p-5 bg-[#F9FBFF]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Phone size={20} />
            </div>
            <div>
              <h4 className="font-semibold">Call Now</h4>
              <p className="text-sm text-gray-600">+088 9988884322</p>
              <p className="text-sm text-gray-600">+088 86542212211</p>
            </div>
          </div>

          {/* Location */}
           <div className="flex items-start gap-4 rounded p-5 bg-[#F9FBFF]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-sm text-gray-600">
                Khagrachari, Bangladesh <br />
                Guimara, Shindukchari <br />
                KHG 4400
              </p>
            </div>
          </div>

          {/* Email */}
           <div className="flex items-start gap-4 rounded p-5 bg-[#F9FBFF]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="font-semibold">Email Address</h4>
              <p className="text-sm text-gray-600">info@example.com</p>
              <p className="text-sm text-gray-600">support@example.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE MAP */}
        <div className="full w-full overflow-hidden rounded-xl border  md:col-span-8 col-span-12">
          <iframe
            src="https://www.google.com/maps?q=Abeokuta,Nigeria&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </MainContainer>
    </section>
  );
}
