'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
    const handleSubmit = (e) => {
      e.preventDefault();
      router.push("/login");
    };

  return (
    <div className="min-h-screen flex justify-center bg-white p-4">
      {/* Centered white panel aligned to the top */}
      <div className="w-full md:w-2/5 bg-[#fbfbfb] shadow-lg flex flex-col items-center p-6 min-h-screen">
        <div className="w-full max-w-md text-left mt-6">
          <h1 className="mb-5 text-3xl font-bold">Sign in to your PopX account</h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name Input */}
            <div className="relative">
              <input
                required
                name="fullName"
                type="text"
                placeholder=" "
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              />
              <label className="absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                Full Name
              </label>
            </div>
            <div className="relative">
              <input
                required
                name="PhoneNumber"
                type="text"
                placeholder=" "
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              />
              <label className="absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                Phone Number
              </label>
            </div>
            <div className="relative">
              <input
                required
                name="EmailAddress"
                type="text"
                placeholder=" "
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              />
              <label className="absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                Email Address
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
            <div className="relative">
              <input
                required
                name="CompanyName"
                type="text"
                placeholder=" "
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              />
              <label className="absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                Company Name
              </label>
            </div>
            {/* Radio Button Group */}

        <div>
            <p className="text-sm mb-2">Are you in an agency?</p>
            <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="isAgency"
                        value="yes"
                        className="appearance-none w-4 h-4 border-2 border-gray-400 rounded-full 
                                   checked:bg-gray-600 checked:border-gray-600 
                                   bg-white 
                                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-30"
                    />
                    <span>Yes</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="isAgency"
                        value="no"
                        defaultChecked
                        className="appearance-none w-4 h-4 border-2 border-gray-400 rounded-full 
                                   checked:bg-gray-600 checked:border-gray-600 
                                   bg-white 
                                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    />
                    <span>No</span>
                </label>
            </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            href="/login"
            className="w-full py-3 font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700 transition"
          >
            Create Account
          </Button>
        </div>
          </form>
        </div>
      </div>
    </div>
  );
}