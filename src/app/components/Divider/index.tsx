import React from "react";

type Props = { title: string };

function Divider({ title }: Props) {
  return (
    <div className="my-12 flex flex-row justify-center md:my-36">
      <div className="flex w-full flex-row items-center justify-center md:w-2/3">
        <hr className="my-8 h-[1px] w-full rounded border-0 bg-white" />
        <p className="mx-3 whitespace-nowrap text-xl text-white">{title}</p>
        <hr className="my-8 h-[1px] w-full rounded border-0 bg-white" />
      </div>
    </div>
  );
}

export { Divider };
