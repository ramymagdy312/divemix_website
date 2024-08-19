"use client";
import MainFooter from "@/components/MainFooter/MainFooter";
import MainHeader from "@/components/MainHeader/MainHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter } from "next/font/google";
import "@/styles/main.css";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 600,
      easing: "ease-in",
      // once: true,
    });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="modalContainer"></div>
        <MainHeader />
        <ToastContainer />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
