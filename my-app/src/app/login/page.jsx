'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/profile");
  };

  return (
    <div className="min-h-screen flex justify-center bg-white p-4">
      {/* Centered white panel aligned to the top */}
      <div className="w-full md:w-2/5 bg-[#fbfbfb] shadow-lg flex flex-col items-center p-6 min-h-screen">
        <div className="w-full max-w-md text-left mt-6">
          <h1 className="mb-5 text-3xl font-bold">Sign in to your PopX account</h1>
          <p className="mb-4 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, beatae.          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name Input */}
            <div className="relative">
              <input
                required
                name="Email"
                type="text"
                placeholder=" "
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              />
              <label className="absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                Email
              </label>
            </div>
            <div className="relative">
              <input
                required
                name="Password"
                type="text"
                placeholder=" "
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              />
              <label className="absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                Password
              </label>
            </div>

        {/* Submit Button */}
        <div className="">
          <Button
            type="submit"
            href="/profile"
            className="w-full py-3 font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700 transition"
          >
            Login
          </Button>
        </div>
          </form>
        </div>
      </div>
    </div>
  );
}