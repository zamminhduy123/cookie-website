export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./**/*.{html,js,jsx,ts,tsx}", // fallback if needed
  ],
  theme: {
    extend: {
      colors: {
        crimson: '#9A0002',
        strawberry: '#FEB3B0',
        choco: '#4B1E1E',
        vanilla: '#FFF5F0',
        honey: '#FBC252',
        cocoa: '#6D3F27',
      },
    },
  },
};