import type { StoryObj, Meta } from "@storybook/react"
import { Box, BoxProps, Text } from "@nodeb/ui"

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>
  },
  argTypes: {
    children: {
      control: {
        type: false
      }
    }
  }
} as Meta

export const Primary: StoryObj<BoxProps> = {}
