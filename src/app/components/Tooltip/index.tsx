import React, { PropsWithChildren } from "react";
import { Tooltip } from "@nextui-org/react";

type Props = {
  text: string;
};

function MyTooltip({ text, children }: Props & PropsWithChildren) {
  return (
    <Tooltip
      placement="bottom"
      className="text-black"
      content={text}
      style={{ backgroundColor: "black", color: "black" }}
    >
      {children}
    </Tooltip>
  );
}

export { MyTooltip };
