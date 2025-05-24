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
          DEFAULT: '#54529D', // Main primary color (purple)
          50: '#F5F5FB',
          100: '#E6E6F5',
          200: '#CDCCE9',
          300: '#B3B2DE',
          400: '#8482C0',
          500: '#54529D', // Main primary color
          600: '#4A4889',
          700: '#3F3D75',
          800: '#343361',
          900: '#2C2C84', // Deep blue variant
        },
        accent: {
          DEFAULT: '#EA5715', // Orange accent color
          50: '#FEF3EE',
          100: '#FDE7DD',
          200: '#FBCFBB',
          300: '#F8B799',
          400: '#F48F55',
          500: '#EA5715', // Main accent color
          600: '#D24B11',
          700: '#B9400E',
          800: '#9F370B',
          900: '#862E09',
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
              DEFAULT: '#54529D', // Purple
              foreground: '#FFFFFF',
            },
            secondary: {
              DEFAULT: '#2C2C84', // Deep blue
              foreground: '#FFFFFF',
            },
            accent: {
              DEFAULT: '#EA5715', // Orange
              foreground: '#FFFFFF',
            },
            default: {
              DEFAULT: '#171717',
              foreground: '#171717',
            },
            background: {
              DEFAULT: '#FFFFFF',
            },
            focus: '#54529D',
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#54529D', // Purple
              foreground: '#FFFFFF',
            },
            secondary: {
              DEFAULT: '#2C2C84', // Deep blue
              foreground: '#FFFFFF',
            },
            accent: {
              DEFAULT: '#EA5715', // Orange
              foreground: '#FFFFFF',
            },
            default: {
              DEFAULT: '#FFFFFF',
              foreground: '#FFFFFF',
            },
            background: {
              DEFAULT: '#171717',
            },
            focus: '#54529D',
          },
        },
      },
    }),
  ],
};
