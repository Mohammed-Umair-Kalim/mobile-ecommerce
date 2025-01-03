"use client";
import Image from "next/image";
import Link from "next/link";

import p9 from "../../public/images/p9 Rectangle 13.jpg";
import p10 from "../../public/images/p10 Rectangle 14.jpg";
import p11 from "../../public/images/p11 Rectangle 15.jpg";

import logo from "../../public/images/logo.png";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col">
      <section
        className="relative bg-cover bg-center h-[60vh] flex flex-col"
        style={{
          backgroundImage: "url('/images/bg1.0.jpg')", // Update with correct path
        }}
      >
        {/* Overlay for slight blur effect */}
        <div className="absolute inset-0 bg-white opacity-50"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex-grow flex items-center justify-center text-center">
          <div className="text-black">
            {/* Logo or Icon */}
            <div className="ml-12">
              <span className="text-gold text-3xl font-bold">
                <Image src={logo} alt="logo" width={40} height={40} />
              </span>{" "}
              {/* Replace with the logo */}
            </div>

            {/* Title */}
            <h1 className="text-5xl font-semibold mb-2">Home</h1>
           
          </div>
        </div>
      </section>

      <section className="py-12">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our Products
          </h2>
          <p className="text-gray-500">
            Find a bright idea which suits you, with our great selection
          </p>
        </div>

        {/* Blog Cards */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
          {/* First Blog Post */}
          <div className="text-center">
            {/* Image */}
            <div className="mb-4">
              <Image
                src={p9}
                alt="Huawei Mate XT Ultimate"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>

            {/* Blog Title */}
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Huawei Mate XT Ultimate
            </h3>

            {/* Read More */}
            <Link
              href="/huawei-trifold"
              className="text-black font-bold hover:underline mb-2 inline-block"
            >
              Read More
            </Link>

            {/* Meta Data */}
            <div className="text-gray-500 flex items-center justify-center space-x-4 mt-2">
              <div className="flex items-center space-x-1">
                <span>⏱️</span>
                <span>5 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📅</span>
                <span>12th Oct 2022</span>
              </div>
            </div>
          </div>

          {/* Second Blog Post */}
          <div className="text-center">
            {/* Image */}
            <div className="mb-4">
              <Image
                src={p10}
                alt="Moto Razr 40 Ultra"
                width={400}
                height={100}
                className="rounded-lg h-72"
              />
            </div>

            {/* Blog Title */}
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Moto Razr 40 Ultra
            </h3>

            {/* Read More */}
            <Link
              href="#"
              className="text-black font-bold hover:underline mb-2 inline-block"
            >
              Read More
            </Link>

            {/* Meta Data */}
            <div className="text-gray-500 flex items-center justify-center space-x-4 mt-2">
              <div className="flex items-center space-x-1">
                <span>⏱️</span>
                <span>5 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📅</span>
                <span>12th Oct 2022</span>
              </div>
            </div>
          </div>

          {/* Third Blog Post */}
          <div className="text-center">
            {/* Image */}
            <div className="mb-4">
              <Image
                src={p11}
                alt="Samsung Z fold 5"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>

            {/* Blog Title */}
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Samsung Z fold 5
            </h3>

            {/* Read More */}
            <Link
              href="#"
              className="text-black font-bold hover:underline mb-2 inline-block"
            >
              Read More
            </Link>

            {/* Meta Data */}
            <div className="text-gray-500 flex items-center justify-center space-x-4 mt-2">
              <div className="flex items-center space-x-1">
                <span>⏱️</span>
                <span>5 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📅</span>
                <span>12th Oct 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
