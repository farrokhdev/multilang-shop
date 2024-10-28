import Image from "next/image";
import React from "react";
import { productCard } from "@/types/types";
import CButton from "@/components/global/CButton";
import {
  darkThemeBg,
  darkThemeBgLight,
  h4,
  h5,
  para,
  paraSm,
  transition,
} from "@/styles/global";
import Link from "next/link";
import { Link as TranslateLink } from "@/i18n/routing";
type Props = {
  product: productCard;
};

export const ProductItemOne = (props: Props) => {
  const { product } = props;
  return (
    <TranslateLink
      href={{ pathname: product.url, query: { id: product.id } }}
      className={` w-full h-max bg-white ${darkThemeBgLight}  flex flex-col gap-2 justify-between shadow-md rounded-md p-4 relative hover:shadow-lg ${transition}`}
    >
      <div className="w-full h-[150px] md:h-[200px] relative">
        <Image
          className={`absolute top-0 left-0 object-cover w-full h-full rounded-md z-10 hover:opacity-0 ${transition}`}
          width={200}
          height={200}
          src={product.image}
          alt=""
        />
        <Image
          className="absolute top-0 left-0 object-cover w-full h-full rounded-md z-0"
          width={200}
          height={200}
          src={product.imageHover}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex w-full items-center justify-between">
          <h4 className={`${h5} capitalize`}>{product.title}</h4>
          <h4 className={`${h5} capitalize`}>{product.price}$</h4>
        </div>
        <p className={`w-full text-gray-500 ${paraSm}`}>{product.desc}</p>
        <CButton
          type="outlined-rounded"
          text="add to cart"
          fullWidth={false}
          cStyle={paraSm}
        />
      </div>
    </TranslateLink>
  );
};
