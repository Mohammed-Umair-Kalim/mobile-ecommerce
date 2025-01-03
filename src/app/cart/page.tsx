"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import AsgaardSofa from "../../../public/images/p10 Rectangle 14.jpg";
import logo from "../../../public/images/logo.png";
import Link from "next/link";


const Cart: React.FC = () => {
  // Step 1: Add state to track the cart items
  const [quantity, setQuantity] = useState<number>(1);

  // Step 2: Create onChange handler to update the quantity
  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // Update the quantity only if the value is a positive integer
    const newQuantity = Math.max(1, parseInt(event.target.value, 10));
    setQuantity(newQuantity);
  };

  return (
    <div className="min-h-screen flex flex-col">
      

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
            <div className="ml-3">
              <span className="text-gold text-3xl font-bold">
                <Image src={logo} alt="logo" width={80} height={80} />
              </span>{" "}
              {/* Replace with the logo */}
            </div>

            {/* Title */}
            <h1 className="text-5xl font-semibold mb-2">Cart</h1>

            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-950">
              <span className="font-semibold">
                <Link href="/">Home</Link>
              </span>{" "}
              &nbsp; &#62; &nbsp;
              <span>
                <Link href="/shop">Shop</Link>
              </span>
            </nav>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Table */}
        <div className="lg:col-span-2">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-yellow-50">
              <tr>
                <th className="text-left py-3 px-4 font-semibold">Product</th>
                <th className="text-left py-3 px-4 font-semibold">Price</th>
                <th className="text-left py-3 px-4 font-semibold">Quantity</th>
                <th className="text-left py-3 px-4 font-semibold">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {/* Cart Item */}
              <tr className="border-t">
                <td className="flex items-center py-4 px-4">
                  <Image
                    src={AsgaardSofa}
                    alt="Asgaard sofa"
                    className="w-20 h-20 rounded-md bg-yellow-100 mr-4"
                  />
                  <span className="text-gray-500">Asgaard sofa</span>
                </td>
                <td className="py-4 px-4 text-gray-500">Rs. 250,000.00</td>
                <td className="py-4 px-4">
                  {/* Step 3: Bind value to state and use the onChange handler */}
                  <input
                    type="number"
                    value={quantity} // Bind to state
                    onChange={handleQuantityChange} // Update state on change
                    min="1"
                    className="w-12 border border-gray-300 rounded text-center"
                  />
                </td>
                <td className="py-4 px-4 font-medium">
                  Rs. {quantity * 250000}.00
                </td>
                <td className="py-4 px-4">
                  <button className="text-yellow-400 hover:text-yellow-500">
                    🗑️
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="bg-yellow-50 p-6 rounded">
          <h3 className="text-xl font-bold mb-4">Cart Totals</h3>
          <div className="flex justify-between mb-3 text-gray-500">
            <span>Subtotal</span>
            <span>Rs. {quantity * 250000}.00</span>{" "}
            {/* Dynamically calculated */}
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-yellow-600">
              Rs. {quantity * 250000}.00
            </span>{" "}
            {/* Dynamically calculated */}
          </div>

          {/* Checkout Button */}
          <button className="w-full mt-6 bg-white text-black border border-black rounded py-3 font-medium hover:bg-black hover:text-white transition">
            <Link href="/checkout">Check Out</Link>
          </button>
        </div>
      </div>

      <div className="w-full bg-pink-50 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
          {/* Free Delivery */}
          <div>
            <h3 className="text-lg font-bold mb-2">Free Delivery</h3>
            <p className="text-gray-500">
              For all orders over $50, consectetur adipim scing elit.
            </p>
          </div>

          {/* 90 Days Return */}
          <div>
            <h3 className="text-lg font-bold mb-2">90 Days Return</h3>
            <p className="text-gray-500">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>

          {/* Secure Payment */}
          <div>
            <h3 className="text-lg font-bold mb-2">Secure Payment</h3>
            <p className="text-gray-500">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
