import React from "react";
import { Chip } from "@nextui-org/react";
import { TechnologiesEnum } from "@/app/utils";

type Props = {
  justify: "start" | "center";
  technologies: Array<TechnologiesEnum>;
};

export function Technologies({ justify, technologies }: Props) {
  return (
    <div
      className={`flex flex-row justify-${justify} flex-wrap gap-x-1 gap-y-2 py-2`}
    >
      {technologies.map((element, index) => {
        return (
          <Chip
            key={index}
            color="primary"
            variant="dot"
            style={{ fontSize: "10px", padding: "3px" }}
          >
            {element}
          </Chip>
        );
      })}
    </div>
  );
}
