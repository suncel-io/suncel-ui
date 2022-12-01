# Suncel UI

A set of pre-made Suncel Blocks fully editable and ready to use in you Suncel Project.
You can cherry pick and copy paste some Blocks in you project to be able to customize them or you can install the package in your project.

## How to install it

You just need to install the `@suncel/ui` package and import the Blocks you want with the rest of the Blocks of your project in your Suncel context.

```bash
npm i @suncel/ui
```

**Example**: if you want to import all the blocks from a specific library

```tsx
// suncel/menuBlocks.tsx file

import { MenuBlockSchema } from "@suncel/nextjs";
import flowbiteBlocks from "@suncel/ui/flowbite";

export const menuBlocks: MenuBlockSchema[] = [
   flowbiteBlocks,
   ...
   // ... other blocks
];


// pages/_app.tsx file

import type { AppProps } from "next/app";
import { SuncelContext } from "@suncel/nextjs";
import { menuBlocks } from "@/suncel/menuBlocks";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SuncelContext menuBlocks={menuBlocks}>
      <Component {...pageProps} />
    </SuncelContext>
  );
}

export default MyApp;
```

**Example**: if you want to import all the blocks from Suncel UI

```tsx
// suncel/menuBlocks.tsx file

import { MenuBlockSchema } from "@suncel/nextjs";
import allBlocks from "@suncel/ui";

export const menuBlocks: MenuBlockSchema[] = [
   ...allBlocks,
   ...
   // ... other blocks
];


// pages/_app.tsx file

import type { AppProps } from "next/app";
import { SuncelContext } from "@suncel/nextjs";
import { menuBlocks } from "@/suncel/menuBlocks";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SuncelContext menuBlocks={menuBlocks}>
      <Component {...pageProps} />
    </SuncelContext>
  );
}

export default MyApp;

```

## Flowbite

All the the free components from the [Flowbite library](https://flowbite.com/) are integrated and fully editable. They are all responsive and dark-mode compatible

```tsx
import { MenuBlockSchema } from "@suncel/nextjs";
import flowbiteBlocks from "@suncel/ui/flowbite";

export const menuBlocks: MenuBlockSchema[] = [flowbiteBlocks];
```

To configure the default style of the Blocks, please refer to the [Flowbite documentation](https://flowbite.com/docs/customize/configuration/). Also to be able to configure it you will need to have Tailwind CSS setup in your project and to add the `@suncel/ui` package inside the content scanned by Tailwind CSS, in order for it to generate the classes.

```tsx
// If you need to configure the style
// Includes @suncel/ui package in the scanned files from Tailwind CSS

// tailwind.config.js file

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./suncel/**/*.{js,ts,jsx,tsx}",
    // Includes @suncel/ui
    "./node_modules/@suncel/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Contribute

The `@suncel/ui` package is Open-source so feel free to contribute to the project if you want to add new blocks or modify an existing Block.
Check our [CONTRIBUTING.md](https://github.com/suncel-io/suncel-ui/blob/main/CONTRIBUTING.md) and ou [CODE_OF_CONDUCT.md](https://github.com/suncel-io/suncel-ui/blob/main/CODE_OF_CONDUCT.md)
