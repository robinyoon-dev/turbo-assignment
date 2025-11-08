import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    appName: {
      control: "text",
      description: "The name of the app using this button",
    },
    children: {
      control: "text",
      description: "Button content",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    appName: "Storybook",
    children: "테스트 버튼",
  },
};

export const WebApp: Story = {
  args: {
    appName: "Web",
    children: "Web Button",
  },
};

export const DocsApp: Story = {
  args: {
    appName: "Docs",
    children: "Documentation Button",
  },
};

