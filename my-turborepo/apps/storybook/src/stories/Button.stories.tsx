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
  globals: { pseudoState: "default" },
  parameters: {
    docs: {
      description: {
        story: "Default button with #111111 background color.",
      },
    },
  },
};

export const Hover = {
  args: {
    children: "다음",
  },
  globals: { pseudoState: "hover" },
  parameters: {
    docs: {
      description: {
        story:
          "Button in hover state. Background color becomes #111111 with 80% opacity.",
      },
    },
  },
};

export const Pressed = {
  args: {
    children: "다음",
  },
  globals: { pseudoState: "pressed" },
  parameters: {
    docs: {
      description: {
        story:
          "Button in pressed state. Background color becomes #111111 with 80% opacity.",
      },
    },
  },
};

// export const AllStates = {
//   render: () => (
//     <div className="flex flex-col gap-8 items-center p-8">
//       <div className="flex flex-col items-center gap-2">
//         <p className="text-sm text-gray-600 mb-2">Default (#111111)</p>
//         <Button>다음</Button>
//       </div>

//       <div className="flex flex-col items-center gap-2">
//         <p className="text-sm text-gray-600 mb-2">Hover (80% opacity)</p>
//         <Button>다음</Button>
//         <p className="text-xs text-gray-500 italic">Hover over to see effect</p>
//       </div>

//       <div className="flex flex-col items-center gap-2">
//         <p className="text-sm text-gray-600 mb-2">Pressed (80% opacity)</p>
//         <Button>다음</Button>
//         <p className="text-xs text-gray-500 italic">Click to see effect</p>
//       </div>

//       <div className="flex flex-col items-center gap-2">
//         <p className="text-sm text-gray-600 mb-2">Disabled</p>
//         <Button disabled>다음</Button>
//       </div>
//     </div>
//   ),
//   parameters: {
//     docs: {
//       description: {
//         story:
//           "Comparison of all button states: Default (#111111), Hover (80% opacity), Active/Pressed (80% opacity), and Disabled.",
//       },
//     },
//   },
// };
