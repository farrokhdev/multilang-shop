"use client";

import { productCategories } from "@/sampleApi/categories";
import React, { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategorieOne } from "./categories/CategorieOne";

type Props = {};

export const CategoriesList = (props: Props) => {
  const [productCats, setProductCats] = useState(productCategories);

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1.6,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2.4,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
        }}
      >
        {productCats.map((cat, i) => {
          return (
            <SwiperSlide
              style={{
                height: "fit-content",
                padding: "20px 0px",
              }}
              key={i}
            >
              <CategorieOne cat={cat} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
