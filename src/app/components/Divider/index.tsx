import React from "react";

type Props = { title: string };

function Divider({ title }: Props) {
  return (
    <div className="flex flex-row justify-center my-12 md:my-36">
      <div className="flex flex-row w-full md:w-2/3 justify-center items-center">
        <hr className="w-full h-[1px] my-8 border-0 rounded bg-white" />
        <p className="mx-3 whitespace-nowrap text-xl text-white">{title}</p>
        <hr className="w-full h-[1px] my-8 border-0 rounded bg-white" />
      </div>
    </div>
  );
}

export { Divider };
