import { resolveColor, resolveTheme } from "@/app/utils";
import { Progress } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";

type SkillProps = {
  label: string;
  value: number;
};

function Skill({ label, value }: SkillProps) {
  const { theme } = useTheme();

  useEffect(() => {}, [theme]);
  return (
    <Progress
      color="default"
      aria-label="Loading..."
      value={value}
      label={label}
      size="sm"
      showValueLabel={true}
      className="p-5"
      // style={{ color: resolveColor(resolveTheme(theme)) }}
      style={{ color: "currentcolor", fill: "currentcolor" }}
    />
  );
}

export { Skill };
export type { SkillProps };
