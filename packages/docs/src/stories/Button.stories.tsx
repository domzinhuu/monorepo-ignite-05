import type { StoryObj, Meta } from "@storybook/react"
import { Button, ButtonProps } from "@msrsoftware/ui"
import { ArrowRight } from "phosphor-react"

export default {
  title: "Form/Button",
  component: Button,
  argTypes: {
    onClick: {
      action: "clicked",
    },
    variant: {
      description: "Choose the color of the button",
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio"
      }
    },
    size: {
      description: "Choose the size of the button",
      options: ["sm", "md"],
      control: {
        type: "inline-radio"
      }
    },
    disabled: {
      description: "Disable the button functionalities",
      control: {
        type: "boolean"
      }
    }
  },
  args: {
    children: "Click me",
    disabled: false
  }
} as Meta

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    size: "md"
  }
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary"
  }
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary"
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
    children: "Small button"
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next step
        <ArrowRight />
      </>
    )
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  }
}
