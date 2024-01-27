import React from "react";
import { TechnologiesEnum } from "@/app/utils";
import { SkillSectionProps, SkillsSection } from "./SkillsSection";

type Props = {};

function Skills({}: Props) {
  const sections: Array<SkillSectionProps> = [
    {
      title: "Primary Stack",
      skills: [
        {
          label: TechnologiesEnum.react,
          value: 90,
        },
        {
          label: TechnologiesEnum.node,
          value: 90,
        },
        {
          label: TechnologiesEnum.mongo,
          value: 90,
        },
        {
          label: TechnologiesEnum.express,
          value: 90,
        },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        {
          label: TechnologiesEnum.nextui,
          value: 90,
        },
        {
          label: TechnologiesEnum.tailwind,
          value: 90,
        },
        {
          label: TechnologiesEnum.material,
          value: 90,
        },
        {
          label: TechnologiesEnum.flowbite,
          value: 90,
        },
        {
          label: TechnologiesEnum.bootstrap,
          value: 90,
        },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        {
          label: TechnologiesEnum.node,
          value: 90,
        },
        {
          label: TechnologiesEnum.nest,
          value: 90,
        },
        {
          label: TechnologiesEnum.aws,
          value: 80,
        },
        {
          label: TechnologiesEnum.docker,
          value: 80,
        },

        {
          label: TechnologiesEnum.github,
          value: 90,
        },
        {
          label: TechnologiesEnum.digitalOcean,
          value: 90,
        },
      ],
    },

    {
      title: "Database",
      skills: [
        {
          label: TechnologiesEnum.mysql,
          value: 80,
        },
        {
          label: TechnologiesEnum.psql,
          value: 90,
        },
        {
          label: TechnologiesEnum.firebase,
          value: 80,
        },
        {
          label: TechnologiesEnum.mongo,
          value: 80,
        },
        {
          label: TechnologiesEnum.typeOrm,
          value: 90,
        },
        {
          label: TechnologiesEnum.prisma,
          value: 90,
        },
        {
          label: TechnologiesEnum.mongoose,
          value: 90,
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          label: TechnologiesEnum.swiper,
          value: 80,
        },
        {
          label: TechnologiesEnum.chatGpt,
          value: 90,
        },
        {
          label: TechnologiesEnum.ethers,
          value: 90,
        },
        {
          label: TechnologiesEnum.sendgrid,
          value: 90,
        },
        {
          label: TechnologiesEnum.digitalOcean,
          value: 90,
        },
        {
          label: TechnologiesEnum.firebase,
          value: 80,
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col w-full px-5">
      {sections.map((skill, index) => {
        return <SkillsSection key={index} {...skill} />;
      })}
    </div>
  );
}

export { Skills };
