import { getContrast } from "polished"

export const getContrastedColor = (
  color: string,
  lightColor: string,
  darkColor: string
) => {
  return getContrast(color, lightColor) < 3.5 ? lightColor : darkColor
}
