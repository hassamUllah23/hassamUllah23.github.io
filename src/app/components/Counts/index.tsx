import React from "react";
import { Coutner } from "./Counter";

type Props = {};

function Counts({}: Props) {
  const array: Array<{
    duration: number;
    limit: number;
    title: string;
  }> = [
    {
      duration: 2000,
      limit: 10,
      title: "Projects",
    },
    {
      duration: 2000,
      limit: 3,
      title: "Years",
    },
    {
      duration: 2000,
      limit: 2,
      title: "Dev Stacks",
    },
  ];
  return (
    <div className="mb-10 flex w-full flex-row items-center justify-center md:gap-x-0">
      {array.map((element, index) => {
        return (
          <div
            key={index}
            className="flex w-1/2 flex-col justify-items-center gap-y-6 p-3 sm:w-1/4"
          >
            <Coutner duration={element.duration} limit={element.limit} />
            <p className="whitespace-nowrap text-center text-lg font-bold md:text-2xl">
              {element.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export { Counts };
