import React, { PropsWithChildren } from "react";
import { ScrollShadow } from "@nextui-org/react";

export default function ScrollContainer({ children }: PropsWithChildren) {
  return <ScrollShadow className="">{children}</ScrollShadow>;
}
