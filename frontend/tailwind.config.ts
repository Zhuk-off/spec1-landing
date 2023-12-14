import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        specText: ['var(--font-inter)'],
        specTitle: ['var(--font-citynova)'],
      },
      colors: {
        'spec-gold-light': '#F7E98C',
        'spec-gold-light-hover': '#DDB04C',
      },
    },
  },
  plugins: [],
}
export default config
