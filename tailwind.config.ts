import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF6EF',
        peach: '#F5D9C0',
        peachnum: '#E8C4A0',
        teal: {
          DEFAULT: '#3B7D73',
          dark: '#2D6159',
        },
        terracotta: {
          DEFAULT: '#B85C38',
          deep: '#9A4A2C',
        },
        ink: {
          DEFAULT: '#4A3F35',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        body: ['var(--font-be-vietnam)', 'Be Vietnam Pro', 'sans-serif'],
        poster: ['var(--font-lora)', 'Lora', 'serif'],
      },
      borderRadius: {
        blob: '45% 55% 70% 30% / 45% 45% 60% 55%',
      },
    },
  },
  plugins: [],
};

export default config;
