import React from "react";
import { FilterItem } from "../product/FilterItem";

type Props = {};

const Tabs = (props: Props) => {
  return (
    <div
      className={`tabs-box w-full flex flex-wrap items-center gap-4 justify-between overflow-x-scroll py-2`}
    >
      <div className="flex gap-2 items-center flex-wrap">
        {/* filter items  */}
        <FilterItem
          type="select"
          name="type"
          placeholder=""
          options={["type one", "type two"]}
          cStyle="bg-gray-100"
        />
        <FilterItem type="text" name="min-price" placeholder="min price" />
        <FilterItem type="text" name="max-price" placeholder="max price" />
        <FilterItem
          type="select"
          name="size"
          placeholder="Size"
          options={["Size", "size one"]}
          cStyle="bg-gray-100"
        />
        <FilterItem
          type="select"
          name="color"
          placeholder="Color"
          options={["color one", "color two"]}
          cStyle="bg-gray-100"
        />
        <FilterItem
          type="select"
          name="category"
          placeholder="Category"
          options={["cat 1", "cat 2"]}
          cStyle="bg-gray-100"
        />
        <FilterItem
          type="select"
          name="filters"
          placeholder="All filters"
          options={["filter 1", "filter 2"]}
          cStyle="bg-gray-100"
        />
      </div>
      <FilterItem
        type="select"
        name="sort"
        placeholder=""
        options={["sort", "latest", "newest"]}
        cStyle="bg-white border"
      />
    </div>
  );
};

export default Tabs;
