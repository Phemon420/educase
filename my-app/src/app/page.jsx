'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {

  

  return (
    <div className="min-h-screen flex justify-center items-end bg-gray-100">
      {/* White panel aligned to bottom center */}
      <div className="w-full md:w-2/5 bg-white shadow-lg flex flex-col justify-end items-center min-h-screen p-6">
        <div className="w-full max-w-md text-center mb-6">
          <h1 className="mb-2 text-2xl font-bold text-gray-800">
            Welcome to PopX
          </h1>
          <p className="mb-4 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, at?
          </p>

          <div className="space-y-3">
            <Link href="/signup" className="w-full block">
              <Button className="w-full px-6 py-1 text-white transition font-semibold bg-[#9445ee] rounded-md shadow-md hover:bg-[#6f28c0] mb-2">
                Create Account
              </Button>
            </Link>

            <Link href="/login" className="w-full block">
              <Button className="px-6 py-1 w-full text-gray-800 transition font-semibold bg-[#b8a2d1] rounded-md shadow-md hover:bg-[#a882d4]">
                Already Registered? Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
