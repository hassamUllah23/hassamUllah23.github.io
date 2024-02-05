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
    // ThemesEnum.forest,
    ThemesEnum.ghost,
    ThemesEnum.night,
    // ThemesEnum.ocean,
    // ThemesEnum.sunset,
  ];
  return (
    <div className="flex items-center gap-4">
      <Popup
        triggerComponent={
          <div className="p-3 cursor-pointer">
            <SelectButton theme={resolveTheme(theme)} selector />
          </div>
        }
      >
        <div
          className="px-3 py-2 flex flex-col gap-y-3 rounded-lg"
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
      className={`flex flex-row gap-x-3 cursor-pointer`}
      onClick={() => {
        if (!selector) {
          console.log("change");
          setTheme(theme);
          // window.location.reload();
        }
      }}
    >
      <div
        className={`p-1 rounded-full w-min border border-gray-100 ${classes} ${
          selector ? "border border-gray-100" : ""
        }`}
      >
        <div
          className="color"
          style={{ backgroundColor: resolveColor(theme) }}
        ></div>
      </div>
      {!selector ? (
        <p className="font-semibold text-sm capitalize">{theme}</p>
      ) : null}
    </div>
  );
}

export { ThemeSelector };
