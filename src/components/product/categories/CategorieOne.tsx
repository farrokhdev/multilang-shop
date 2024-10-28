import { h4 } from "@/styles/global";
import { categoryCard } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { Link as TranslateLink } from "@/i18n/routing";
import React from "react";

type Props = {
  cat: categoryCard;
};

export const CategorieOne = (props: Props) => {
  const { cat } = props;
  return (
    <TranslateLink href={cat.url}>
      <div className="w-full h-max min-h-[300px] relative">
        <Image
          className="absolute z-0 top-0 left-0 object-cover"
          fill
          src={cat.image}
          alt=""
        />
        <div className="absolute w-full h-full z-10 bg-black pointer-events-none opacity-50"></div>
        <h4
          className={`absolute bottom-4 z-20 text-center w-full text-white capitalize  ${h4}`}
        >
          {cat.name}
        </h4>
      </div>
    </TranslateLink>
  );
};
