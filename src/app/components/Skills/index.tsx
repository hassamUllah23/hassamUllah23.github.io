import React, { PropsWithChildren } from "react";
import { TechnologiesEnum } from "@/app/utils";
import { SkillSectionProps, SkillsSection } from "./SkillsSection";
import { Accordion, AccordionProps, AccordionItem } from "@nextui-org/react";
import { Skill } from "./Skill";
import { LanguagesEnum } from "@/app/utils/enums.utils";

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
      title: "Languages",
      skills: [
        {
          label: LanguagesEnum.ts,
          value: 95,
        },
        {
          label: LanguagesEnum.js,
          value: 90,
        },
        {
          label: LanguagesEnum.java,
          value: 80,
        },
        {
          label: LanguagesEnum.py,
          value: 70,
        },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        {
          label: TechnologiesEnum.angular,
          value: 75,
        },
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
          label: TechnologiesEnum.nginx,
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
  ];
  return (
    <div>
      <div className="hidden md:flex">
        <div className="flex w-full flex-row flex-wrap">
          {sections.map((skill, index) => {
            return (
              <div className="w-full px-10 md:w-1/2">
                <SkillsSection key={index} {...skill} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex md:hidden">
        <div className="flex w-full flex-col gap-5">
          {sections.map((skill, index) => {
            return (
              <div className="w-full">
                <MyAccordion title={skill.title}>
                  <div className="flex w-full flex-row flex-wrap">
                    {skill.skills.map((skill, index) => {
                      return (
                        <div className="w-full sm:w-1/2">
                          <Skill key={index} {...skill} />
                        </div>
                      );
                    })}
                  </div>
                </MyAccordion>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

type MyAccordionProps = {
  title: string;
};
function MyAccordion({
  title,
  children,
}: MyAccordionProps & PropsWithChildren) {
  return (
    <Accordion
      className="w-full"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      <AccordionItem aria-label={title} title={title}>
        {children}
      </AccordionItem>
    </Accordion>
  );
}

export { Skills };
