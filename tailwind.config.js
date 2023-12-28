module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "200px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1480px",
      },
      colors: {
        primaryTextColor: "rgb(69, 71, 69)",
        secondary: "#fefefe",
        header: "#333;",
        textError: "#ea0303",
        backgroundErrorIcon: "rgb(168, 32, 13)",
        invalidCredentialBg: "rgba(22, 51, 0, 0.08)",
        backgroundButtonColor: "rgb(61, 145, 253)",
        inputBorder: "#868685",
        socialButtonBorder: "#e5e7eb",
      },
      boxShadow: {
        shadowTop: "-3px 0 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
