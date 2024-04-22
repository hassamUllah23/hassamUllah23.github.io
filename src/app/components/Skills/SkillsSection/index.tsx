import React from "react";
import { Skill, SkillProps } from "../Skill";
import { useTheme } from "next-themes";
import { Chip } from "@nextui-org/react";

type SkillSectionProps = {
  title: string;
  skills: Array<SkillProps>;
  type?: "progress" | "chip";
};

function SkillsSection({
  title,
  skills,
  type = "progress",
}: SkillSectionProps) {
  const { theme } = useTheme();
  return (
    <div className="mb-10 flex flex-col gap-4">
      <h1 className="text-nowrap px-5 text-sm font-bold sm:text-base md:text-xl">
        {title}
      </h1>
      <div
        className={`flex w-full flex-row flex-wrap ${type === "chip" ? "justify-start gap-2" : ""}`}
      >
        {skills.map((skill, index) => {
          return (
            <>
              {type === "progress" ? (
                <div key={index} className="w-full p-5 sm:w-1/2">
                  <Skill key={index} {...skill} />
                </div>
              ) : (
                <div className="w-fit ">
                  <Chip
                    color="default"
                    variant="bordered"
                    style={{ fontSize: "10px", padding: "3px" }}
                  >
                    {skill.label}
                  </Chip>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export { SkillsSection };
export type { SkillSectionProps };
