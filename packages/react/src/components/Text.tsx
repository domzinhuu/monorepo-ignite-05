import { ComponentProps } from "@stitches/react"
import { styled } from "../styles"
import { ElementType } from "react"
import { extractFontSizeFromTokens } from "../utils/functions"

export const Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray600",

  variants: {
    size: extractFontSizeFromTokens()
  },
  defaultVariants: {
    size: "md"
  }
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'