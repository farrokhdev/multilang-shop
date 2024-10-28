import { ListHero } from "@/components/ListPage/ListHero";
import Tabs from "@/components/ListPage/Tabs";
import ProductList from "@/components/product/ProductList";
import ProductsTemplate from "@/components/product/ProductsTemplate";
import { globMargin, globPadding } from "@/styles/global";
import React from "react";

type Props = {};

const Shop = (props: Props) => {
  return (
    <div className={`w-full h-fit `}>
      <div className={`w-full  ${globPadding}`}>
        <ListHero />
      </div>
      <div className={`w-full ${globMargin} my-20 ${globPadding}`}>
        <Tabs />
      </div>
      <div className={`w-full ${globMargin} my-20`}>
        <ProductsTemplate
          title="All Products"
          content={<ProductList type="shop" />}
        />
      </div>
    </div>
  );
};

export default Shop;
