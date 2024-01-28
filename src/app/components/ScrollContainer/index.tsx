import React, { PropsWithChildren } from "react";
import { ScrollShadow } from "@nextui-org/react";

function ScrollContainer({ children }: PropsWithChildren) {
  return <ScrollShadow className="">{children}</ScrollShadow>;
}

export { ScrollContainer };
