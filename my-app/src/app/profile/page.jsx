'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-end bg-gray-300">
      {/* Outer container */}
      <div className="w-full md:w-2/5 shadow-lg flex flex-col justify-end items-center min-h-screen">
        
        {/* Top White Section */}
        <div className="w-full bg-white p-4">
          <div className="w-full max-w-md">
            <h3 className="mb-2 text-2xl font-medium text-gray-800">
              Account Settings
            </h3>
          </div>
        </div>

        {/* Bottom Gray Section */}
        <div className="w-full bg-gray-100 p-6 flex flex-col flex-1">
          {/* Profile section */}
          <div className="flex items-center space-x-4 mb-5">
            {/* Avatar wrapper with camera icon */}
            <div className="relative w-20 h-20">
              <img 
                src="/lol.jpg"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border border-gray-300"
              />
              <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-sm">
                <Camera className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            {/* Name & Email */}
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-gray-800">
                John Doe
              </span>
              <span className="text-md text-gray-800">
                johndoe@gmail.com
              </span>
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-md text-black">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>

          {/* Dotted Line (placed after paragraph) */}
          <div className="w-full border-b-2 border-dotted border-black mt-5"></div>
        </div>
      </div>
    </div>
  );
}
