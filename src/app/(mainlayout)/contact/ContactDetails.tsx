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
                Shindukchari, Guimara- 4440, <br /> Khagrachhari, Chattagram,
                Bangladesh
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
              <p className="text-sm text-gray-600">info@gmail.com</p>
              <p className="text-sm text-gray-600">support@gmail.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE MAP */}
        <div className="w-full overflow-hidden rounded-xl border md:col-span-8 col-span-12 h-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902231845774!2d92.2081793!3d23.7345245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375263c1a1a1a1a1%3A0x123456789abcdef!2sShindukchari%20Eco%20Resort!5e0!3m2!1sen!2sbd!4v1700000000000"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </MainContainer>
    </section>
  );
}
