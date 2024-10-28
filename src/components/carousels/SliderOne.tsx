"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import CButton from "../global/CButton";
import Link from "next/link";
import { globPadding, h2, h5, para, paraLg, paraSm } from "@/styles/global";

type Props = {};

const slides = [
  {
    id: 1,
    bg: "/slider/3.jpeg",
    title: "sample",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vero soluta velit veritatis aperiam distinctioexplicabo, cupiditate quibusdam omnis necessitatibus quossequi",
    btnText: "see more",
    descPart: 2,
    url: "/",
  },
  {
    id: 2,
    bg: "/slider/5.jpeg",
    title: "sample 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vero soluta velit veritatis aperiam distinctioexplicabo, cupiditate quibusdam omnis necessitatibus quossequi",
    btnText: "see more",
    descPart: 2,
    url: "/",
  },
  {
    id: 3,
    bg: "/slider/2.jpeg",
    title: "sample 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vero soluta velit veritatis aperiam distinctioexplicabo, cupiditate quibusdam omnis necessitatibus quossequi",
    btnText: "see more",
    descPart: 2,
    url: "/",
  },
];

export const SliderOne = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interVal = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, 3000);

  //   return () => clearInterval(interVal);
  // }, []);

  return (
    <>
      <div className="w-full h-full relative z-0  bg-black">
        <div
          // or w-[calc(3*100vw)]
          // w-max
          className={`
          w-[calc(${slides.length}*100vw)]
          flex
           h-full gap-0 transition-all duration-1000 ease-in-out`}
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          // style={{ transform: `translateX(-200vw)` }}
        >
          {slides &&
            slides.map((slide) => {
              return (
                <div className="w-screen h-full relative" key={slide.id}>
                  <Image
                    className="absolute z-0 object-cover"
                    fill
                    sizes="100%"
                    src={slide.bg}
                    alt=""
                  />
                  {/* <Image
                    className="w-[40%] left-0 h-full absolute z-0 object-cover"
                    width={200}
                    height={20}
                    sizes="100%"
                    src={slide.bg}
                    alt=""
                  /> */}
                  {/* overlay  */}
                  <div className="absolute w-full h-full bg-black bg-opacity-25 pointer-events-none"></div>
                  <div
                    className={`absolute z-20 flex w-full h-full items-center justify-center ${globPadding} py-8 ${
                      slide.descPart == 1
                        ? "md:justify-start"
                        : "md:justify-end"
                    }`}
                  >
                    <div className=" flex flex-col items-center justify-center gap-4 w-full md:w-1/2  p-8 bg-white bg-opacity-50 rounded-md">
                      <h2 className={`${h2}`}>{slide.title}</h2>
                      <p className={`${paraLg} text-center text-gray-900`}>
                        {slide.desc}
                      </p>
                      <Link
                        className="w-full flex items-center justify-center text-center"
                        href={slide.url}
                      >
                        <CButton
                          text={slide.btnText}
                          type="filled"
                          fullWidth={false}
                          cStyle={paraSm}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="absolute m-auto left-1/2 -translate-x-1/2 bottom-8 flex gap-4 z-30">
          {slides.map((slide, index) => (
            <div
              className={`w-3 h-3  rounded-full ring-1 ring-gray-50 cursor-pointer flex items-center justify-center transition-all duration-500 ${
                currentSlide === index ? "scale-150" : ""
              }`}
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
            >
              {currentSlide === index && (
                <div className="w-[6px] h-[6px] bg-gray-50 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
