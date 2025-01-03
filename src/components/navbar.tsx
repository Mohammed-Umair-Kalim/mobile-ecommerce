"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cart from "../../public/images/shopping-cart.png";
import user from "../../public/images/user.png";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-4 ml-16 bg-gradient-to-r from-white via-[#ceae1fd7] to-white">
      <ul className="hidden md:flex space-x-20 font-semibold ml-[320px] text-black">
        <li className="hover:text-gray-800 cursor-pointer">
          <Link href="/">Home</Link>
        </li>

        <li className="hover:text-gray-800 cursor-pointer">
          <Link href="/about">About</Link>
        </li>

        <li className="hover:text-gray-800 cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className="flex items-center space-x-10">
        <button>
          <Link href="/login">
            <Image src={user} alt="User" width={28} height={28} />
          </Link>
        </button>

        <button>
          <Link href="/login">
            <Image src={cart} alt="User" width={28} height={28} />
          </Link>
        </button>
        
      </div>
    </nav>
  );
};

export default NavBar;
