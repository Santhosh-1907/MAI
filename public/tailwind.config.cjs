module.exports = {
  content: ["./index.html"],
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
        "header-bar": "#022743",
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
