import Image from "next/image";
import React from "react";
import Image7 from "../../public/img7.jpg";

const Categories = () => {
  return (
    <>
      <section className="w-full bg-[#FEFFFE] py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array(4)
            .fill("")
            .map((_, index) => (
              <div key={index} className="relative group hover:cursor-pointer">
                <Image
                  src={Image7}
                  alt="E-commerce Platform"
                  width={350}
                  height={250}
                  className="rounded-md transition-transform duration-300 ease-in-out transform group-hover:scale-105 hover:bg-black hover:bg-opacity-50"
                />
                <h2 className="absolute bottom-0 left-0 ml-2 mb-2 text-xl font-semibold text-white bg-black bg-opacity-50 px-2 py-1 rounded transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:bg-opacity-70">
                  E-commerce Platform
                </h2>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Categories;
