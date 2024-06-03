import React from "react";
import { Chip } from "@nextui-org/react";
import { TechnologiesEnum } from "@/app/utils";
import { withTooltip } from "../../HOCs";
import { MyTooltip } from "../../Tooltip";

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
        return <TechnologyItem key={index} technology={element} />;
      })}
    </div>
  );
}

function TechnologyItem({ technology }: { technology: TechnologiesEnum }) {
  return (
    <MyTooltip text={technology}>
      <Chip
        color="default"
        variant="bordered"
        style={{ fontSize: "10px", padding: "3px" }}
      >
        {technology}
      </Chip>
    </MyTooltip>
  );
}

// const TechnologyItemWithTooltip = withTooltip(TechnologyItem);
