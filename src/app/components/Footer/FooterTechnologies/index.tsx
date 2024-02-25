import React from "react";
import { Chip, Divider } from "@nextui-org/react";
import { TechnologiesEnum } from "@/app/utils";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });

type Props = {};

function FooterTechnologies({}: Props) {
  const technologies: Array<TechnologiesEnum> = [
    TechnologiesEnum.next,
    TechnologiesEnum.nextui,
    TechnologiesEnum.tailwind,
    TechnologiesEnum.particles,
    TechnologiesEnum.forms,
    TechnologiesEnum.scroll,
    TechnologiesEnum.chrono,
    TechnologiesEnum.reactIcons,
  ];
  return (
    <div className="my-5">
      <div className="flex w-full flex-row items-center justify-center">
        <p
          className={` md:text-normal text-tiny sm:text-sm ${orbitron.className}`}
        >
          AND
        </p>
      </div>

      <div className="my-2 flex w-full flex-row flex-wrap items-center justify-center gap-1 sm:my-4 sm:gap-3 md:flex-nowrap">
        {technologies.map((technology, index) => {
          return (
            <div key={index}>
              <Chip
                variant="bordered"
                radius="md"
                className="whitespace-nowrap p-0 text-tiny sm:p-1 sm:text-sm"
                style={{ padding: 0 }}
              >
                {technology}
              </Chip>
              <Divider orientation="vertical" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { FooterTechnologies };
