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
      className=" my-3 text-white"
    />
  );
}

export { Skill };
export type { SkillProps };
