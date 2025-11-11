# Storybook

This is a Storybook workspace for documenting and developing UI components from the `@repo/ui` package.

## Getting Started

### Development

To run Storybook in development mode:

```bash
pnpm dev
```

This will start the Storybook dev server on `http://localhost:6006`.

### Build

To build the static Storybook site:

```bash
pnpm build
```

The output will be in the `storybook-static` directory.

### Preview

To preview the built Storybook:

```bash
pnpm preview
```

## What's inside?

This Storybook workspace includes:

- Stories for all UI components from `@repo/ui`
- Interactive documentation
- Component testing capabilities
- Vite as the build tool

## Available Stories

- **Button** - Interactive button component with customizable app name
- **Card** - Link card component with title and description

## Adding New Stories

1. Create a new `.stories.tsx` file in `src/stories/`
2. Import the component from `@repo/ui`
3. Define the story metadata and variants
4. The story will automatically appear in Storybook

Example:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { YourComponent } from "@repo/ui/your-component";

const meta = {
  title: "UI/YourComponent",
  component: YourComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // your props here
  },
};
```
