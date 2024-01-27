import { ColorsEnum, ThemesEnum } from ".";

function resolveTheme(color: string | undefined): ThemesEnum {
  if (color === ThemesEnum.ocean) return ThemesEnum.ocean;
  if (color === ThemesEnum.forest) return ThemesEnum.forest;
  if (color === ThemesEnum.sunset) return ThemesEnum.sunset;
  else return ThemesEnum.ghost;
}
function resolveColor(theme: ThemesEnum): ColorsEnum {
  switch (theme) {
    case ThemesEnum.ocean:
      return ColorsEnum.ocean;
    case ThemesEnum.forest:
      return ColorsEnum.forest;
    case ThemesEnum.ghost:
      return ColorsEnum.ghost;
    case ThemesEnum.sunset:
      return ColorsEnum.sunset;
  }
}

export { resolveColor, resolveTheme };
