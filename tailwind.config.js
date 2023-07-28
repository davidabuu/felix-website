/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat Light", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        'custom': '2px 2px 4px rgba(0, 0, 0, 0.3)',
        // Add more custom box shadow variants as needed
      },
    },
  },
  plugins: [],
};
