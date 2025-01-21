import React from "react";
import { icons } from "@/app/icons";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-slate-100  to-[#B8D1F4]">
      <section className="container mx-auto px-4 py-6 w-full h-[850px]">
        <div className="py-56 px-9 w-2/4">
          <h1 className="text-black font-bold text-7xl mb-4">
            Empowering Digital Transformation
          </h1>
          <span className="text-black text-xl py-4 font-sans tracking-wide ">
            At CoreWeave, we specialize in crafting bespoke digital solutions
            that elevate your business. Dive into our world of innovation and
            see how we can transform your digital presence.
          </span>
          <div className="py-6 space-x-7 flex">
            <button className="bg-[#1F91FF] hover:bg-[#379af7] py-3 px-4 rounded-md">
              Discover our services
            </button>
            <button className=" text-black flex items-center space-x-2 transition duration-300 transform hover:translate-x-2">
              <span className="font-semibold"> View Our Work</span>
              <icons.arrowRight />
            </button>
          </div>
        </div>
        <div className=""></div>
      </section>
    </section>
  );
};

export default HeroSection;
