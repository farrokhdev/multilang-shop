"use client";

import CButton from "@/components/global/CButton";
import {
  globMargin,
  globPadding,
  h5,
  para,
  paraSm,
  transition,
} from "@/styles/global";
import { h1 } from "framer-motion/client";
import { h4 } from "framer-motion/m";
import Image from "next/image";
import React, { useState } from "react";
import { useParams } from "next/navigation";
// import { usePathname } from "@/i18n/routing";
import { usePathname } from "next/navigation";

type Props = {};

const ProductSingle = (props: Props) => {
  const [quantity, setQuantity] = useState(1);
  // const params = useParams<{ locale: string; product: string }>();
  // const path = usePathname();
  // console.log(path);

  const increase = () => {
    setQuantity((prev) => {
      if (prev == 10) {
        return 10;
      }
      return prev + 1;
    });
  };

  const decrease = () => {
    setQuantity((prev) => {
      if (prev == 1) {
        return 1;
      }
      return prev - 1;
    });
  };

  return (
    <div className={`w-full h-max ${globPadding}  mb-20`}>
      {/* wrapper  */}
      <div className="w-full h-full flex flex-col md:flex-row gap-8">
        {/* gallery  */}
        <div className="basis-1/2 ">
          <div className="sticky top-0 flex flex-col gap-4">
            <Image
              className="w-full h-auto lg:h-[500px] object-cover rounded-md"
              width={500}
              height={500}
              src={"/product.png"}
              alt=""
            />
            {/* temp gallery after must be slider */}
            <div className="w-full  flex items-center justify-between gap-4 overflow-hidden">
              <Image
                className="w-[100px] lg:w-full h-[100px] lg:h-[150px] object-cover rounded-md cursor-pointer"
                width={150}
                height={150}
                src={"/product.png"}
                alt=""
              />
              <Image
                className="w-[100px] lg:w-full h-[100px] lg:h-[150px] object-cover rounded-md cursor-pointer"
                width={150}
                height={150}
                src={"/product.png"}
                alt=""
              />
              <Image
                className="w-[100px] lg:w-full h-[100px] lg:h-[150px] object-cover rounded-md cursor-pointer"
                width={150}
                height={150}
                src={"/product.png"}
                alt=""
              />
              <Image
                className="w-[100px] lg:w-full h-[100px] lg:h-[150px] object-cover rounded-md cursor-pointer"
                width={150}
                height={150}
                src={"/product.png"}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* content  */}
        <div className="basis-1/2 flex flex-col gap-4">
          {/* title and desc */}
          <div className="w-full flex flex-col gap-4 px-0 py-4 border-b border-b-gray-200">
            <h1 className={`${h1}`}>Digital Incense</h1>
            <p className={`${para} text-gray-700`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
              adipisci?
            </p>
          </div>
          {/* Price */}
          <div className="w-full flex flex-row items-center gap-4 px-0 py-4 border-b border-b-gray-200">
            <h5 className={`${h5} line-through text-gray-700`}>$45</h5>
            <h4 className={`${h4}  text-black`}>$40.5</h4>
          </div>
          {/* colors */}
          <div className="w-full flex flex-col gap-4 px-0 py-4 border-b border-b-gray-200">
            <h4 className={`${h4}  text-black`}>Choose a color</h4>

            <div className="w-full flex flex-row items-center gap-4">
              <div className="w-[24px] h-[24px] rounded-full hover:ring-black bg-black cursor-pointer"></div>
              <div className="w-[24px] h-[24px] rounded-full hover:ring-black bg-yellow-500 cursor-pointer"></div>
              <div className="w-[24px] h-[24px] rounded-full hover:ring-black bg-red-500 cursor-pointer"></div>
            </div>
          </div>
          {/* Sizes */}
          <div className="w-full flex flex-col gap-4 px-0 py-4 border-b border-b-gray-200">
            <h4 className={`${h4}  text-black`}>Choose a Size</h4>

            <div className="w-full flex flex-row items-center gap-4">
              <button
                className={`flex text-center items-center jsutify-center border-primary border rounded-md text-primary px-2 py-1 ${paraSm} hover:bg-primary hover:text-white ${transition}`}
              >
                Large
              </button>
              <button
                className={`flex text-center items-center jsutify-center border-primary border rounded-md text-primary px-2 py-1 ${paraSm} hover:bg-primary hover:text-white ${transition}`}
              >
                Medium
              </button>
              <button
                className={`flex text-center items-center jsutify-center border-primary border rounded-md text-primary px-2 py-1 ${paraSm} hover:bg-primary hover:text-white ${transition}`}
              >
                Small
              </button>
            </div>
          </div>
          {/* Quantity */}
          <div className="w-full flex flex-col gap-4 px-0 py-4 border-b border-b-gray-200">
            <h4 className={`${h4}  text-black`}>Choose a quantity</h4>

            <div className="w-full flex flex-row items-center justify-between gap-4">
              {/* quantity number  */}

              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between px-4 py-2 gap-2 bg-gray-200 rounded-full min-w-[100px]">
                  <button
                    className="outline-none border-none bg-transparent"
                    onClick={decrease}
                  >
                    -
                  </button>
                  <span className={`${paraSm}`}>{quantity}</span>
                  <button
                    className="outline-none border-none bg-transparent"
                    onClick={increase}
                  >
                    +
                  </button>
                </div>
                {quantity == 10 && (
                  <p className={`${paraSm} text-primary`}>Out of stock!!!</p>
                )}
              </div>
              {/* add to cart  */}
              <button
                className={`flex text-center items-center jsutify-center border-primary rounded-full 
              text-white bg-primary transition-all duration-100 hover:text-primary hover:bg-white px-4 py-2 ${paraSm}`}
              >
                Add to cart
              </button>
            </div>
          </div>
          {/* infos */}
          <div className="w-full flex flex-col gap-4 px-0 py-4 ">
            <div className="flex flex-col gap-4">
              <h5 className={`${h5} uppercase`}>Product Info</h5>
              <p className={`${paraSm} text-gray-700`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos
                distinctio odit vitae ea est inventore debitis officiis eos
                architecto nemo iste vero unde corrupti, illum adipisci, dolorum
                cupiditate ex.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className={`${h5} uppercase`}>Return Policy</h5>
              <p className={`${paraSm} text-gray-700`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos
                distinctio odit vitae ea est inventore debitis officiis eos
                architecto nemo iste vero unde corrupti, illum adipisci, dolorum
                cupiditate ex.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className={`${h5} uppercase`}>Shiping Info</h5>
              <p className={`${paraSm} text-gray-700`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos
                distinctio odit vitae ea est inventore debitis officiis eos
                architecto nemo iste vero unde corrupti, illum adipisci, dolorum
                cupiditate ex.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
