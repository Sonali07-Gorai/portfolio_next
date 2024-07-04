/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      screen: {
        sm:'640px',
        md:'768px',
        lg:'960px',
        xl:'1024px',
        
      },
      colors: {
        accent: "#08E95E",
      },
    },
  },
  plugins: [],
};
