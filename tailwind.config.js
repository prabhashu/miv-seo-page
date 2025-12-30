
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        seo: {
          bg: "#0F0F0F",
          card: "#1A1A1A",
          text: {
            primary: "#FFFFFF",
            secondary: "#B0B0B0",
            button: "#000000",
          },
          gold: {
            DEFAULT: "#CBA135",
            light: "#D4AF37",
            dark: "#B88A44",
          }
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #B88A44 100%)',
      }
    },
  },
  plugins: [],
}
