import React from "react";
import { SliderOne } from "../carousels/SliderOne";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="w-full h-[calc(100vh-80px)] overflow-hidden">
      <SliderOne />
    </section>
  );
};

export default Hero;
