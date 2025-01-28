import React from "react";
import { icons } from "../app/icons";

const OurServices = () => {
  const ourServices = [
    {
      title: "Web Development",
      description:
        "Utilize our expertise to build robust and scalable web solutions tailored to your business needs.",
      icon: <icons.code />,
    },
    {
      title: "App Development",
      description:
        "Utilize our expertise to build robust and scalable web solutions tailored to your business needs.",
      icon: <icons.code />,
    },
    {
      title: "Digital Marketing Development",
      description:
        "Utilize our expertise to build robust and scalable web solutions tailored to your business needs.",
      icon: <icons.tvMinimal />,
    },
    {
      title: "UI/UX Development",
      description:
        "Utilize our expertise to build robust and scalable web solutions tailored to your business needs.",
      icon: <icons.monitorPlay />,
    },
  ];
  return (
    <>
      <section className="bg-[#022B71] w-full lg:h-[800px] ">
        <div className="container mx-auto py-16 px-6 md:justify-between flex flex-col lg:flex-row">
          <div className="lg:w-2/4">
            <h2 className="md:text-7xl text-5xl font-semibold mb-4">
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
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:p-6">
            {ourServices.map((services, index) => (
              <div
                key={index}
                className="shadow-md bg-inherit hover:bg-[#050e1f] flex flex-col lg:h-[300px] lg:w-[250px] rounded-md p-4 space-y-4 mt-6 px-8"
              >
                {services.icon}
                <span className="text-2xl">{services.title}</span>
                <p className="text-bg">{services.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
