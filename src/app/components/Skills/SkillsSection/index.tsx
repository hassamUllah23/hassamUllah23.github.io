import React from "react";
import { Skill, SkillProps } from "../Skill";
import { useTheme } from "next-themes";
import { resolveColor, resolveTheme } from "@/app/utils";

type SkillSectionProps = {
  title: string;
  skills: Array<SkillProps>;
};

function SkillsSection({ title, skills }: SkillSectionProps) {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col gap-4 mb-10">
      <h1
        className="text-sm sm:text-base md:text-xl px-4"
        style={{ color: resolveColor(resolveTheme(theme)) }}
      >
        {title}
      </h1>
      <div className="flex flex-row w-full flex-wrap">
        {skills.map((skill, index) => {
          return (
            <div className="w-full sm:w-1/2">
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
