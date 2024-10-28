"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CButton from "./CButton";

type Props = {};

const sampleProduct = [
  {
    image:
      "https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Shirt",
    stock: true,
    price: "$40.5",
    qty: 1,
  },
  {
    image:
      "https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Shirt",
    stock: true,
    price: "$40.5",
    qty: 1,
  },
];

const CartModal = (props: Props) => {
  const [cart, setCart] = useState(sampleProduct);

  const handleRemove = (all: "all" | "" = "") => {
    if (all === "all") {
      // remove all
    }
    // remove single
  };
  return (
    <div className="absolute w-max min-h-20 bg-white flex flex-col gap-4 items-start rounded-md shadow-custom  top-12 right-0 px-4 py-4  z-20">
      <h2 className="text-xl font-bold text-black">Shopping Cart</h2>
      <div className="flex flex-col gap-4 w-full">
        {cart ? (
          cart.map((item) => {
            return (
              <div className="w-full flex items-start justify-between gap-2 border rounded.md p-2">
                {/* image part  */}

                <Image
                  className="object-cover rounded-md"
                  width={50}
                  height={80}
                  src={item.image || "/logo.png"}
                  alt=""
                />

                {/* text-part  */}
                <div className="flex-1 flex items-start justify-between w-full h-[80px]">
                  <div className="flex flex-col gap-0 h-full">
                    <h4 className="text-base text-black font-semibold">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {item.stock ? "available" : "not available"}
                    </p>
                    <div className="mt-auto text-sm text-gray-500">
                      Qty {item.qty}
                    </div>
                  </div>
                  <div className="flex flex-col gap-0 h-full">
                    <p className="text-base font-semibold text-black">$40.5</p>
                    <Link
                      className="text-sm mt-auto text-blue-600"
                      href={"/"}
                      onClick={() => handleRemove()}
                    >
                      Remove
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-sm text-gray-500 w-full">Cart is empty</p>
        )}
      </div>
      <div className="flex flex-col gap-4 text-black w-full">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col">
            <h4 className="text-base font-semibold">Subtotal</h4>
            <h4 className="text-sm font-semibold">$40.5</h4>
          </div>
          <Link
            className="text-sm mt-auto text-blue-600"
            href={"/"}
            onClick={() => handleRemove("all")}
          >
            Remove All
          </Link>
        </div>
        <p className="text-gray-500 w-full text-sm">
          Shipping and taxes calculation at checkout
        </p>
        <div className="flex items-center justify-between">
          <CButton text="View Cart" type="outlined" fullWidth={false} />
          <CButton text="Checkout" type="filled" fullWidth={false} />
        </div>
      </div>
    </div>
  );
};

export default CartModal;
