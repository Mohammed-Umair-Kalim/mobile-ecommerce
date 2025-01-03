import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png"
import Link from "next/link";

const About = () => {
  return (
    <div>
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
            <div className="ml-[38%]">
              <span className="text-gold text-3xl font-bold">
                <Image src={logo} alt="logo" width={40} height={40} />
              </span>{" "}
              {/* Replace with the logo */}
            </div>

            {/* Title */}
            <h1 className="text-5xl font-semibold mb-2">About</h1>

            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-950">
              <span className="font-semibold">
                {" "}
                <Link href="/">Home</Link>{" "}
              </span>{" "}
              &nbsp; &#62; &nbsp;
              <span>About</span>
            </nav>

          </div>
        </div>
      </section>
    </div>
  )
}

export default About