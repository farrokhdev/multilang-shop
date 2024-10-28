"use client";
import React, { ReactElement } from "react";
import { globPadding, h1, h2 } from "@/styles/global";

type Props = {
  title: string;
  content: any;
  category?: boolean;
};

const ProductsTemplate = (props: Props) => {
  const { title, content, category } = props;

  return (
    <div className={`w-full h-max flex flex-col gap-6 `}>
      <h1 className={`w-full ${h2} ${globPadding}`}>{title}</h1>
      <div className={`w-full h-max ${category ? "px-4" : globPadding}`}>
        {content}
      </div>
    </div>
  );
};

export default ProductsTemplate;
