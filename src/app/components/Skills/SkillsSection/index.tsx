import React from "react";
import { Skill, SkillProps } from "../Skill";
import { useTheme } from "next-themes";

type SkillSectionProps = {
  title: string;
  skills: Array<SkillProps>;
};

function SkillsSection({ title, skills }: SkillSectionProps) {
  const { theme } = useTheme();
  return (
    <div className="mb-10 flex flex-col gap-4">
      <h1 className="px-5 text-sm font-bold sm:text-base md:text-xl">
        {title}
      </h1>
      <div className="flex w-full flex-row flex-wrap">
        {skills.map((skill, index) => {
          return (
            <div className="w-full p-5 sm:w-1/2">
              <Skill key={index} {...skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { SkillsSection };
export type { SkillSectionProps };
