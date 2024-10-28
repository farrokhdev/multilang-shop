"use client";
import {
  globPadding,
  h2,
  h3,
  h4,
  h5,
  input,
  link,
  para,
  paraSm,
} from "@/styles/global";
import React, { useState } from "react";
import { Link as TranslateLink } from "@/i18n/routing";
import { productCategories } from "@/sampleApi/categories";
import { products } from "@/sampleApi/products";
import { navItems } from "@/sampleApi/NavItems";
import { useLocale, useTranslations } from "next-intl";
import CButton from "./CButton";
import Image from "next/image";

type Props = {};

export const Footer = (props: Props) => {
  const t = useTranslations("header.nav");
  const [latestProducts, setLatestProducts] = useState(products);
  const [productCats, setProductCats] = useState(productCategories);
  const locale = useLocale();
  return (
    <div
      className={`w-full flex flex-col gap-8 h-max bg-gray-300 pt-8 pb-12 ${globPadding}`}
    >
      {/* TOP  */}
      <div
        className={`w-full h-fit flex flex-wrap md:flex-nowrap gap-y-10 md:gap-x-5 justify-between  text-black `}
      >
        {/* Logo  */}
        <div className="w-full h-full">
          <TranslateLink href="/">
            <div className={`${h2} tracking-wide `}>Soheil</div>
            <p className={`${paraSm}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </TranslateLink>
        </div>
        <div className="w-full h-full flex flex-col items-center md:items-start  gap-4 basis-full sm:basis-1/2 md:basis-full">
          <h4 className={`${h4} `}>Categories</h4>
          <div className="flex flex-col gap-2 items-center md:items-start">
            {productCats.map((cat, i) => {
              return (
                <TranslateLink key={i} className={`${link}`} href={cat.url}>
                  {cat.name}
                </TranslateLink>
              );
            })}
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center md:items-start  gap-4 basis-full sm:basis-1/2 md:basis-full">
          <h4 className={`${h4} `}>Latest Products</h4>
          <div className="flex flex-row sm:flex-col gap-2 items-center md:items-start">
            {latestProducts.map((product, i) => {
              return (
                <TranslateLink key={i} className={`${link}`} href={product.url}>
                  {product.title}
                </TranslateLink>
              );
            })}
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center md:items-start  gap-4 basis-full ">
          <h4 className={`${h4} `}>Menu</h4>
          <div className="flex flex-row sm:flex-col gap-2 items-center md:items-start">
            {navItems(t).map((item, i) => {
              return (
                <TranslateLink key={i} className={`${link}`} href={item.url}>
                  {/* {t("homepage")} */}
                  {item.name}
                </TranslateLink>
              );
            })}
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center md:items-start  gap-4 basis-full ">
          <h4 className={`${h4} `}>Subscribe</h4>
          <p className={`${paraSm}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <form className="flex w-full h-[40px] items-center gap-0">
            <input
              name="email"
              type="email"
              className={` h-full ${input}`}
              placeholder="Email address"
            />
            <CButton
              text="Join"
              type="default"
              cStyle="bais-1/3 bg-primary text-white flex items-center h-full"
            />
          </form>
          <h4 className={`${h5} `}>Secure Payments</h4>
          <div className="flex items-center justify-center md:justify-between gap-4 w-full">
            <Image
              className=""
              width={40}
              height={10}
              src={"/visa.png"}
              alt=""
            />
            <Image
              className=""
              width={40}
              height={10}
              src={"/skrill.png"}
              alt=""
            />
            <Image
              className=""
              width={40}
              height={10}
              src={"/paypal.png"}
              alt=""
            />
            <Image
              className=""
              width={40}
              height={10}
              src={"/discover.png"}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* BUTTOM  */}
      <div className="w-full h-max flex gap-4 justify-between items-center">
        <span className={`${paraSm}`}>@ 2024 Soheil farrokh shop</span>
        <div className="flex gap-4 items-center">
          <span className={`${paraSm}`}>Language</span>
          <span
            className={`${paraSm} capitalize`}
            // onClick={() => locale === "fa"}
          >
            {locale === "fa"
              ? "Persian"
              : locale === "en"
              ? "English"
              : "English"}
          </span>
        </div>
      </div>
    </div>
  );
};
