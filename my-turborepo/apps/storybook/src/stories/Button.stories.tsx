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
    children: {
      control: "text",
      description: "Button content",
    },
    onClick: {
      action: "clicked",
      description: "Click handler function",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "다음",
  },
  parameters: {
    docs: {
      description: {
        story: "Default button with #111111 background color.",
      },
    },
  },
};

export const Hover: Story = {
  args: {
    children: "다음",
  },
  parameters: {
    pseudo: { hover: true },
    docs: {
      description: {
        story:
          "Button in hover state. Background color becomes #111111 with 80% opacity.",
      },
    },
  },
};

export const Pressed: Story = {
  args: {
    children: "다음",
  },
  parameters: {
    pseudo: { pressed: true },
    docs: {
      description: {
        story:
          "Button in pressed state. Background color becomes #111111 with 80% opacity.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: "다음",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled button state with reduced opacity and no interaction.",
      },
    },
  },
};

export const PreviousButton: Story = {
  args: {
    children: "이전",
  },
  parameters: {
    docs: {
      description: {
        story: "Previous button variant used in the photos page.",
      },
    },
  },
};

export const CustomClassName: Story = {
  args: {
    children: "Custom Button",
    className: "lg:max-w-[200px] lg:ml-auto",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Button with custom className for additional styling. This example shows a button with custom max-width on large screens.",
      },
    },
  },
};

export const AllStates = {
  render: () => (
    <div className="flex flex-col gap-8 items-center p-8">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-600 mb-2">Default (#111111)</p>
        <Button>다음</Button>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-600 mb-2">Hover (80% opacity)</p>
        <Button>다음</Button>
        <p className="text-xs text-gray-500 italic">Hover over to see effect</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-600 mb-2">Pressed (80% opacity)</p>
        <Button>다음</Button>
        <p className="text-xs text-gray-500 italic">Click to see effect</p>
      </div>

    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comparison of all button states: Default (#111111), Hover (80% opacity), Active/Pressed (80% opacity), and Disabled.",
      },
    },
  },
};
