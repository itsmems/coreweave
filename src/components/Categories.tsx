"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const tabs = ["Web Development", "App Development", "Digital Marketing"];
  const cards = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/img6.jpeg",
    },
    {
      title: "Corporate Website",
      category: "Digital Marketing",
      image: "/img4.jpg",
    },
    {
      title: "Responsive Web Design",
      category: "Web Development",
      image: "/img6.jpg",
    },
    {
      title: "User Experience Enhancement",
      category: "App Development",
      image: "/img7.jpg",
    },
  ];

  const [activeTab, setActiveTab] = useState("Web Development");

  const filteredCards =
    activeTab === "Web Development"
      ? cards
      : cards.filter((card) => card.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="container mx-auto">
        <div className="flex space-x-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards with Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCards.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white rounded-lg shadow-md h-80 group"
            >
              <Image
                src={card.image}
                alt={card.title}
                className="object-cover h-80 w-80 transform transition duration-300 group-hover:scale-105"
                fill
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-55 transition duration-300"></div>

              {/* Text Content */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <span className="px-2 py-1 text-sm font-medium text-white bg-slate-400 rounded">
                  {card.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
