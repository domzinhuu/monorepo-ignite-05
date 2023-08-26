import { ComponentProps } from "@stitches/react"
import { styled } from "../styles"
import { ElementType } from "react"
import { extractHeadingSizeFromTokens } from "../utils/functions"

export const Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray600",

  variants: {
    size: extractHeadingSizeFromTokens()
  },
  defaultVariants: {
    size: "md"
  }
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'