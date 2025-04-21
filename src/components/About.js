"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // small arrows

const sections = [
  {
    name: "2 Sharing Room",
    images: ["/Room1A.JPG", "/Room1B.JPG"],
  },
  {
    name: "4 Sharing Room 1",
    images: ["/Room2A.JPG", "/Room2B.JPG"],
  },
  {
    name: "4 Sharing Room 2",
    images: ["/Room3A.JPG", "/Room3B.JPG"],
  },
  {
    name: "Master Bedroom",
    images: ["/Bathroom.JPG", "/Room1A.JPG", "/Room2A.JPG"],
    isFullWidth: true,
  },
  {
    name: "Common Areas",
    images: ["/Livingroom.JPG", "/Livingroom2.JPG", "/Livingroom.JPG","/Dining.JPG","/Dining2.JPG"],
    isFullWidth: true,
  },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Our Rooms & Common Areas
      </h2>

      {/* First Row: 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {sections.slice(0, 3).map((section, index) => (
          <RoomSection key={index} section={section} />
        ))}
      </div>

      {/* Second Row: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sections.slice(3).map((section, index) => (
          <RoomSection key={index} section={section} isFullWidth />
        ))}
      </div>
    </div>
  );
}

function RoomSection({ section, isFullWidth = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === section.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? section.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
    id="about" className={`bg-purple-100 p-4 rounded-2xl shadow-sm ${
        isFullWidth ? "col-span-1 lg:col-span-1" : ""
      }`}
    >
      <h3 className="text-lg font-semibold mb-2 text-purple-900">
        {section.name}
      </h3>

      <div className="relative w-full h-[400px] overflow-hidden rounded-md">
        <Image
          src={section.images[currentIndex]}
          alt={section.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />

        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-purple-600 border border-purple-300 p-1 rounded-full shadow-sm"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-purple-600 border border-purple-300 p-1 rounded-full shadow-sm"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
