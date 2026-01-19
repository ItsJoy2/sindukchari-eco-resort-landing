import ProgressBar from "@/lib/progress/Progressbar";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sindukchari Eco Resort",
  description: "Sindukchari Eco Resort",
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased font-playfair`}>
        {" "}
        <Suspense fallback={null}>
          <ProgressBar />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
