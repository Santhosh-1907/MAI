/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",        // <– important for your index.html in public
    "./src/**/*.{js,jsx,ts,tsx}" // <– React / JS files
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003A66",
          dark: "#002747",
          light: "#0C5D96"
        },
        accent: "#FFB33F",
        header: "#003A66",
        "header-bar": "#022743", // <– this is the one you used
        section: "#F4F6FB"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 45px rgba(15, 23, 42, 0.18)"
      },
      borderRadius: {
        "xl-plus": "1.4rem"
      }
    }
  },
  plugins: []
};
