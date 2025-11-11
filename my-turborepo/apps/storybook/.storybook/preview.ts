import type { Decorator, Preview } from "@storybook/react";
import React from "react";
import "../src/storybook.css";


export const globalTypes: Preview["globalTypes"] = {
  pseudoState: {
    name: "State",
    description: "Force pseudo state",
    defaultValue: "default",
    toolbar: {
      icon: "contrast",
      items: [
        { value: "default", title: "Default" },
        { value: "hover",   title: "Hover" },
        { value: "pressed", title: "Pressed" },
      ],
    },
  },
};

export const decorators: Decorator[] = [
  (Story, ctx) => {
    const state = ctx.globals.pseudoState as string;
    const map: Record<string, string> = {
      hover: "force-hover",
      pressed: "force-pressed",
      default: "",
    };
    const cls = map[state] ?? "";
    return React.createElement("div", { className: cls }, React.createElement(Story));
  },
];

const preview: Preview = {
  globalTypes,
  decorators,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

