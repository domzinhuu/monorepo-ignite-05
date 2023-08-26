import { fontSizes } from "@msrsoftware/tokens"
import { getContrast } from "polished"

export const extractFontSizeFromTokens = () => {
  return Object.keys(fontSizes).reduce<Record<string, { fontSize: string }>>(
    (acc, cur) => {
      acc[cur] = {
        fontSize: `$${cur}`
      }
      return acc
    },
    {}
  )
}

export const extractHeadingSizeFromTokens = () => {
  return {
    sm: {
      fontSize: `$xl`
    },
    md: {
      fontSize: `$2xl`
    },
    lg: {
      fontSize: `$4xl`
    },
    '2xl': {
      fontSize: `$5xl`
    },
    '3xl': {
      fontSize: `$6xl`
    },
    '4xl': {
      fontSize: `$7xl`
    },
    '5xl': {
      fontSize: `$8xl`
    },
    '6xl': {
      fontSize: `$9xl`
    },
  }
}


export const getContrastedColor = (
  color: string,
  lightColor: string,
  darkColor: string
) => {
  return getContrast(color, lightColor) < 3.5 ? lightColor : darkColor
}
