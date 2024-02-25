import React from "react";
import { Popup } from "..";
import { useTheme } from "next-themes";
import {
  ThemesEnum,
  ColorsEnum,
  resolveColor,
  resolveTheme,
} from "@/app/utils";

type Props = {};

function ThemeSelector({}: Props) {
  const { theme } = useTheme();

  const themes: Array<ThemesEnum> = [
    ThemesEnum.forest,
    ThemesEnum.ghost,
    ThemesEnum.ocean,
    ThemesEnum.sunset,
  ];
  return (
    <div className="flex items-center gap-4">
      <Popup
        triggerComponent={
          <div className="cursor-pointer p-3">
            <SelectButton theme={resolveTheme(theme)} selector />
          </div>
        }
      >
        <div
          className="flex flex-col gap-y-3 rounded-lg px-3 py-2"
          style={{ backgroundColor: "black" }}
        >
          {themes.map((theme: ThemesEnum, index) => {
            return <SelectButton key={index} theme={theme} />;
          })}
        </div>
      </Popup>
    </div>
  );
}

function SelectButton({
  theme,
  classes = ``,
  selector = false,
}: {
  theme: ThemesEnum;
  classes?: string;
  selector?: boolean;
}) {
  const { setTheme } = useTheme();

  return (
    <div
      className={`flex cursor-pointer flex-row gap-x-3`}
      onClick={() => {
        if (!selector) {
          setTheme(theme);
          window.location.reload();
        }
      }}
    >
      <div
        className={`w-min rounded-full p-1 ${classes} ${
          selector ? "border border-gray-100" : ""
        }`}
      >
        <div
          className="color"
          style={{ backgroundColor: resolveColor(theme) }}
        ></div>
      </div>
      {!selector ? (
        <p className="text-sm font-semibold capitalize">{theme}</p>
      ) : null}
    </div>
  );
}

export { ThemeSelector };
