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
    <div className="flex flex-col gap-4 mb-10">
      <h1
        className="text-sm sm:text-base md:text-xl font-bold px-5"
      >
        {title}
      </h1>
      <div className="flex flex-row w-full flex-wrap">
        {skills.map((skill, index) => {
          return (
            <div className="w-full sm:w-1/2 p-5">
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
