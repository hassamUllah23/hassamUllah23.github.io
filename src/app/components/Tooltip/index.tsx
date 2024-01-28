import React, { PropsWithChildren } from "react";
import { Tooltip } from "@nextui-org/react";

type Props = {
  text: string;
};

function MyTooltip({ text, children }: Props & PropsWithChildren) {
  return (
    <Tooltip placement="bottom" content={text}>
      {children}
    </Tooltip>
  );
}

export { MyTooltip };
