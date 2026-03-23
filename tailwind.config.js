import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4A90E2', // A soft, professional blue
        'secondary': '#50E3C2', // A complementary soft teal
        'background': '#F4F7F9', // A very light gray for backgrounds
        'text-primary': '#333333',
        'text-secondary': '#555555',
        'border': '#DDDDDD',
      },
      fontFamily: {
        sans: ["var(--font-roboto)"],
        heading: ["var(--font-poppins)"],
        'open-sans': ["var(--font-open-sans)"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
