import React from "react";

type Props = {
  text: string;
  type: "outlined" | "filled" | "outlined-rounded" | "default";
  fullWidth?: boolean;
  cStyle?: string;
};

const CButton = (props: Props) => {
  const { text, type, fullWidth, cStyle } = props;

  if (type === "outlined") {
    return (
      <div
        className={`${
          fullWidth && "w-full text-center"
        } w-fit px-4 py-4 rounded-md border border-gray-500 text-gray-900  hover:bg-black hover:text-white transition-all duration-100 cursor-pointer ${cStyle}`}
      >
        {text}
      </div>
    );
  } else if (type === "filled") {
    return (
      <div
        className={`${
          fullWidth && "w-full text-center"
        } w-fit px-4 py-4 rounded-md border border-black bg-black text-white  hover:text-gray-500 hover:bg-transparent hover:border-gray-500 hover:text-gray-900 transition-all duration-100 cursor-pointer ${cStyle}`}
      >
        {text}
      </div>
    );
  } else if (type === "outlined-rounded") {
    return (
      <div
        className={`${
          fullWidth && "w-full text-center"
        } w-fit  px-4 py-3 rounded-full border border-primary text-primary   hover:bg-primary hover:border-gray-500 hover:text-white hover:border-white transition-all duration-100 cursor-pointer ${cStyle}`}
      >
        {text}
      </div>
    );
  } else {
    return (
      <button
        className={`${
          fullWidth && "w-full text-center"
        } w-fit  px-4 py-3      hover:bg-primary  hover:text-white  transition-all duration-100 cursor-pointer ${cStyle}`}
      >
        {text}
      </button>
    );
  }
};

export default CButton;
