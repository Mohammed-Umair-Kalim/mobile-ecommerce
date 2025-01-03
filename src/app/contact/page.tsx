"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import phone from "../../../public/images/phone.png";
import address from "../../../public/images/address.png";
import clock from "../../../public/images/clock.png";

const Contact = () => {
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
            <div className="ml-16">
              <span className="text-gold text-3xl font-bold">
                <Image src={logo} alt="logo" width={40} height={40} />
              </span>{" "}
              {/* Replace with the logo */}
            </div>

            {/* Title */}
            <h1 className="text-5xl font-semibold mb-2">Contact</h1>

            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-950">
              <span className="font-semibold">
                {" "}
                <Link href="/">Home</Link>{" "}
              </span>{" "}
              &nbsp; &#62; &nbsp;
              <span>Contact</span>
            </nav>

          </div>
        </div>
      </section>

      <div className="text-center mt-14">
        <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
        <p className="text-gray-500">
          For more information about our products & services, please feel free
          to drop us
          <br /> an email. Our staff is always here to help you out. Do not
          hesitate!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        {/* Contact Information */}
        <div className="space-y-6 ">
          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-start">
            <Image className="text-xl mr-4" src={address} alt="address-img" width={28} height={28}/>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-500">
                 Gulshane-e-umair, Karachi street-9, Pakistan
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <Image className="text-xl mr-4" src={phone} alt="phone-img" width={28} height={28}/>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-500">Mobile: +(92)-309-0235428</p>
              </div>

            </div>
            {/* Working Time */}
            <div className="flex items-start">
            <Image className="text-xl mr-4" src={clock} alt="clock-img" width={28} height={28}/>
              <div>
                <h3 className="font-semibold">Working Time</h3>
                <p className="text-gray-500">Monday–Friday: 9:00 – 22:00</p>
                <p className="text-gray-500">Saturday–Sunday: 9:00 – 21:00</p>
              </div>

            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg p-6 rounded-md">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Abc"
                className="w-full border border-gray-300 rounded p-2 mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Abc@def.com"
                className="w-full border border-gray-300 rounded p-2 mt-1"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="This is an optional"
                className="w-full border border-gray-300 rounded p-2 mt-1"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Hi! I’d like to ask about"
                className="w-full border border-gray-300 rounded p-2 mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[200px] border border-black text-black py-2 rounded-full hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;
