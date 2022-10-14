import { Text, TextProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    size: "md",
    children: "Text",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "inline-radio" },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomText: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text with P</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
