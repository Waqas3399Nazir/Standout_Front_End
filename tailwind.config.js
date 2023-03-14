/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // important: true,
  theme: {
    extend: {
      spacing: {
        maxWidth: "633px",
        maxHeight: "676px",
      },

      flex: {
        5: "50%",
      },
      margin: {
        auto: "auto",
      },
      fontSize: {
        heading: ["2.5rem", "3rem"],
        footerItem: ["26px", "50px"],
        footerGrayItem: ["20px", "50px"],
        mainHeading: ["84px", "76px"],
        homeSubHeading: ["18px", "22px"],
        homeButtonText: ["16px", "16px"],
        secondContainerHeading: ["36px", "22px"],
        formHeading: ["28px", "36px"],
      },
      backgroundImage: {
        firstSectionImage: "url('/images/home-page-first-section.png')",
        secondSectionImage: "url('/images/home-page-second-section.png')",
        loginImage: "url('/images/login.png')",
        registerImage: "url('/images/signup-image.png')",
        productPageImage: "url('/images/product-page-image.png')",
        tyreImage: "url('/images/footer-above-tyre.png')",
        dealCardBackgroundImage: "url('/images/card-placeholder-image.png')",
      },
      padding: {
        sectionPadding: "0 21.20% 0 21.20%",
        productPagePadding: "5.56rem 7.8125%",
        sectionXPadding: "0 7.8125% 0 7.8125%",
        checkoutSectionPadding: " 0 16.67% 0 16.67%",
      },
      maxWidth: {
        dealsCardWidth: "20rem",
      },
      minWidth: {
        dealsCardWidth: "20rem",
      },
      minHeight: {
        autoHeight: "27rem",
      },
    },
    fontFamily: {
      heading: ["Bebas Neue"],
      Inter: ["Inter"],
      Montserrat: ["Montserrat"],
      Poppins: ["Poppins"],
    },
    letterSpacing: {
      headingSpace: "-0.01em",
    },
  },
  plugins: [],
};
