import { paraSm } from "@/styles/global";
import { FilterTab } from "@/types/types";
import React from "react";

type Props = FilterTab;

export const FilterItem = (props: Props) => {
  const { type, name, placeholder, options, cStyle } = props;

  if (type === "text") {
    return (
      <input
        name={name}
        type="text"
        className={` w-[100px] ${paraSm} bg-white border outline-none px-2 rounded-full py-2 flex items-center  placeholder:text-gray-500`}
        placeholder={placeholder}
      />
    );
  }
  return (
    <select
      name={name}
      className={`w-fit ${paraSm}   outline-none px-4 rounded-full py-2 flex items-center justify-center text-center placeholder:text-gray-500 ${cStyle}`}
    >
      {options &&
        options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
    </select>
  );
};
