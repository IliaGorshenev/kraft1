// import {heroui} from "@heroui/theme"

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [heroui()],
// }

import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF8461',
          50: '#FFF8F5',
          100: '#FFEDE7',
          200: '#FFD6C9',
          300: '#FFBFAB',
          400: '#FFA78D',
          500: '#FF8461', // Main primary color
          600: '#FF6A3E',
          700: '#FF501B',
          800: '#F73C00',
          900: '#D43300',
        },
        dark: {
          DEFAULT: '#171717',
          50: '#F8F8F8',
          100: '#E0E0E0',
          200: '#C2C2C2',
          300: '#A3A3A3',
          400: '#858585',
          500: '#666666',
          600: '#484848',
          700: '#2A2A2A',
          800: '#1F1F1F',
          900: '#171717', // Main dark color
        },
      },
      backgroundColor: {
        page: '#FFFFFF', // White background for pages
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#FF8461',
              foreground: '#FFFFFF',
            },
            default: {
              DEFAULT: '#171717',
              foreground: '#171717',
            },
            background: {
              DEFAULT: '#FFFFFF',
            },
            focus: '#FF8461',
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#FF8461',
              foreground: '#FFFFFF',
            },
            default: {
              DEFAULT: '#FFFFFF',
              foreground: '#FFFFFF',
            },
            background: {
              DEFAULT: '#171717',
            },
            focus: '#FF8461',
          },
        },
      },
    }),
  ],
};
