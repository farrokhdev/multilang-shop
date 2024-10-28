"use client";

import React, { Suspense, useRef, useState } from "react";
import { products } from "@/sampleApi/products";
import { ProductItemOne } from "./productItem/ProductItemOne";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  isSlider?: boolean;
  type: "home" | "shop";
};

const ProductList = (props: Props) => {
  const { type } = props;
  const [featuredProducts, setFeaturedProduct] = useState(products);

  if (featuredProducts.length > 3 && type === "home") {
    return (
      <div className="w-full relative">
        <Suspense>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // navigation={true}
            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {featuredProducts.map((product, i) => {
              return (
                <SwiperSlide
                  style={{
                    height: "fit-content",
                    padding: "20px 0px",
                  }}
                  key={i}
                >
                  <ProductItemOne product={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Suspense>
        {/* buttons  */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 z-50 w-full flex h-full items-center justify-between pointer-events-none">
          <button className="pointer-events-auto arrow-left arrow rounded-full ring-1 ring-primary w-[24px] h-[24px] p-4 flex text-center items-center justify-center bg-white color-gray-500"></button>
          <button className="pointer-events-auto arrow-right arrow rounded-full ring-1 ring-primary w-[24px] h-[24px] p-4 flex text-center items-center justify-center bg-white color-gray-500"></button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
      {featuredProducts.map((product, i) => {
        return (
          <div key={i}>
            <ProductItemOne product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
