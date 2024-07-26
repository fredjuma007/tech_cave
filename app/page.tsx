"use client"

import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

import WebsiteDesign from "./website-design";
import GraphicDesign from "./grapic-design";
import WordpressWeb from "./wordpress-web";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { useRef } from "react";

export default function Home() {

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const grapicDesignRef = useRef<HTMLDivElement>(null);
  const wordpressWebRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    grapicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWordpressWeb = () => {
    wordpressWebRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
      scrollToWebsiteDesign={scrollToWebsiteDesign}
      scrollToGraphicDesign={scrollToGraphicDesign}
      scrollToWordpressWeb={scrollToWordpressWeb}
      scrollToBrands={scrollToBrands}
       />
      <Spotlight
      className="hidden md:flex left-80"
      fill="white"
      />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-32 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center
        bg-clip-text text-transparent bg-gradient-to-b
         from-neutral-50 to bg-neutral-500 bg-opacity-50">
          Create, grow, and <br /> brand your business with us
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom web design, branding, and marketing services for your business.
          we are a full-service digital agency that specializes in web design,
        </p>
        
        <Link
        href={"/book"}
        className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white"
        >
          Schedule a Call
        </Link>

          <WebsiteDesign />      
          <GraphicDesign />
          < WordpressWeb/>
          <Brands />
          <Services />
          <FAQS />

        </div>

      </div>
  );
}
