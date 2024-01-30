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
      <div className="flex flex-row items-center justify-center w-full">
        <p
          className={` text-tiny sm:text-sm md:text-normal ${orbitron.className}`}
        >
          AND
        </p>
      </div>

      <div className="flex flex-row items-center justify-center w-full flex-wrap md:flex-nowrap gap-1 sm:gap-3 my-2 sm:my-4">
        {technologies.map((technology, index) => {
          return (
            <div key={index}>
              <Chip
                variant="bordered"
                radius="md"
                className="whitespace-nowrap text-tiny sm:text-sm p-0 sm:p-1"
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
