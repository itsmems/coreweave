import React from "react";
import { icons } from "../app/icons";

const OurServices = () => {
  return (
    <>
      <section className="bg-[#022B71] w-full h-[800px]">
        <div className="container mx-auto py-20 px-6 justify-between flex">
          <div className="w-2/4">
            <h2 className="text-7xl font-semibold mb-4">
              Pioneering Digital Excellence
            </h2>
            <p className="font-thin">
              Explore how CoreWeave is committed to delivering cutting-edge
              solutions across web development, app development, and digital
              marketing to drive your business success.
            </p>
            <button className="bg-white text-black py-3 px-4 rounded-md flex items-center space-x-2 transition duration-300 transform hover:translate-x-2 mt-6">
              <span>Learn More</span>

              <icons.arrowRight />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 p-6">
            <div className="border-1 bg-inherit hover:bg-[#050e1f] flex flex-col h-[300px] w-[250px] rounded-md p-4 space-y-4 mt-6 px-8">
              <icons.code />
              <span className="text-2xl">Web Development</span>
              <p className="text-bg">
                Utilize our expertise to build robust and scalable web solutions
                tailored to your business needs.
              </p>
            </div>
            <div className="border-1 bg-inherit hover:bg-[#050e1f] flex flex-col h-[300px] w-[250px] rounded-md p-4 space-y-4 mt-6 px-8">
              <icons.smartphone />
              <span className="text-2xl">App Development</span>
              <p className="text-bg">
                Utilize our expertise to build robust and scalable web solutions
                tailored to your business needs.
              </p>
            </div>
            <div className="border-1 bg-inherit hover:bg-[#050e1f] flex flex-col h-[300px] w-[250px] rounded-md p-4 space-y-4 mt-6 px-8">
              <icons.tvMinimal />
              <span className="text-2xl">Digital Marketing Development</span>
              <p className="text-bg">
                Utilize our expertise to build robust and scalable web solutions
                tailored to your business needs.
              </p>
            </div>
            <div className="border-1 bg-inherit hover:bg-[#02060c] flex flex-col h-[300px] w-[250px] rounded-md py-4 space-y-4 mt-6 px-8">
              <icons.monitorPlay />
              <span className="text-2xl">UI/UX Development</span>
              <p className="text-bg">
                Utilize our expertise to build robust and scalable web solutions
                tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
