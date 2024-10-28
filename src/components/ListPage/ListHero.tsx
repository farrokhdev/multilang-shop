"use client";
import React from "react";

import Image from "next/image";
import CButton from "../global/CButton";
import { h1, h1Big, h2, link } from "@/styles/global";
type Props = {};

export const ListHero = (props: Props) => {
  return (
    <div className="w-full  bg-primaryL gap-4 px-4 pt-4 flex items-center justify-between overflow-hidden">
      <div className="flex-1 flex flex-col gap-4 pl-6 md:pl-20">
        <h1
          className={`text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold capitalize`}
        >
          Heading 2
        </h1>
        <CButton
          text="Buy Now"
          type="outlined-rounded"
          cStyle={`${link} bg-primary text-white`}
        />
      </div>
      <div className=" basis-1/3 flex items-end  h-full overflow-hidden">
        <Image
          className="w-full h-auto object-cover"
          width={500}
          height={300}
          src={"/woman.png"}
          alt=""
        />
      </div>
    </div>
  );
};
