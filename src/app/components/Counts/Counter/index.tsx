import React from "react";
import CountUp from "react-countup";

type Props = {
  limit: number;
  duration: number;
};

function Coutner({ limit, duration }: Props) {
  return (
    <CountUp
      start={0}
      end={limit}
      duration={3}
      useEasing
      enableScrollSpy
      scrollSpyDelay={300}
      className="font-bold text-lg md:text-3xl lg:text-6xl text-center"
      style={{ color: "white" }}
    ></CountUp>
  );
}

export { Coutner };
