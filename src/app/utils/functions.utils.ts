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

function hasEmptyValues(data: Record<string, any>): boolean {
  const checkEmpty = (value: any): boolean => {
    if (typeof value === "object" && value !== null) {
      return hasEmptyValues(value);
    }
    return (
      value === undefined ||
      value === null ||
      value === 0 ||
      value === "" ||
      Number.isNaN(value) ||
      (Array.isArray(value) && value.length === 0)
    );
  };

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key];
      if (checkEmpty(element)) {
        return true;
      }
    }
  }

  return false;
}

export { resolveColor, resolveTheme, hasEmptyValues };
