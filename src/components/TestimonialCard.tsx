import Image from "next/image";
import React from "react";
import img from "../../public/img8.jpg";

const reviews = [
  {
    name: "Jordan Singer",
    role: "UI/UX Designer",
    image: "/path-to-image1.jpg", // Replace with actual paths
  },
  {
    name: "Avery Stewart",
    role: "Creative Director",
    image: "/path-to-image2.jpg",
  },
  {
    name: "Riley Jones",
    role: "Brand Strategist",
    image: "/path-to-image3.jpg",
  },
];

const ReviewsSection = () => {
  return (
    <section className="bg-[#EAF6FF] py-12">
      <div className="container mx-auto px-4">
        <section className="flex flex-col items-center justify-center text-black">
          <h2 className="text-5xl font-semibold text-center">
            Endorsed by Industry <br /> Leaders
          </h2>
          <p className="text-lg text-center mt-4">
            Our clients trust us to deliver exceptional results, and their
            testimonials speak volumes about our commitment to excellence.
          </p>
        </section>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg group hover:cursor-pointer"
            >
              {/* Image */}
              <Image
                src={img}
                alt={`${review.name}'s photo`}
                layout="responsive"
                width={400}
                height={300}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
              {/* Text Content */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-sm">{review.role}</p>
              </div>
              {/* Play Button */}
              <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
        {/* CTA Button */}
        <div className="mt-8 text-center">
          <a href="#" className="text-blue-600 font-semibold">
            See all reviews by our customers →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
