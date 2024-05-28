/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'base-green-lightcolors': 'rgba(224, 251, 197, 1)',
        'base-lightestcolors': 'rgba(239, 253, 226, 1)',
        'base-redcolor': 'rgba(220, 92, 92, 1)',
        'dark-greencolor': 'rgba(44, 116, 77, 1)',
        'greycolor': 'rgba(137, 137, 137, 1)',
        'stroke-greencolor': 'rgba(147, 190, 121, 1)',
        'text-blackcolor': 'rgba(29, 29, 31, 1)',
        'text-dark-greycolor': 'rgba(51, 51, 51, 1)',
        'green':'rgba(152, 201, 157, 0.62)',
        'pink': 'rgba(242, 153, 239, 0.36)',

        
        
      },
      boxShadow:{
       "DashShadow":"-6.28846px 6.28846px 17.29327px 0px rgba(138, 75, 75, 0.13)",
       "md": "-4px 4px 11px 0px rgba(138, 75, 75, 0.13)",
       "md2": "0 0 11px 0px rgba(138, 75, 75, 0.13)",
       "md3": "0px 2px 5px 0px rgba(129, 129, 129, 0.24",
       "md4": " 0px 2px 5px 0px rgba(129, 129, 129, 0.24)",
       "xl": "-6px 6px 25px 0px rgba(138, 75, 75, 0.20)", 
       "xl2": "0px 0px 10px 0px rgba(0, 0, 0, 0.15)", 
       "xl3": "0px 0px 5px 0px rgba(0, 0, 0, 0.10)", 
       "xl4" :"0px 0px 18px 0px rgba(0, 0, 0, 0.05)",
       "xl5": "0px 0px 13px 0px rgba(231, 216, 216, 0.15",
       
       
      },
      blur: {
        '5': '5px',
        '10': '10px',
        '20': '20px',
      },
      fontFamily: {
        "open-sans": "'Open-Sans'",
        "body-main": "Roboto",
        "roboto-flex": "'Roboto Flex'",
        "tsukimi-rounded": "'Tsukimi Rounded'",
        montserrat: "Montserrat",
        inherit: "inherit",
        inter: "Inter",
      },
     
      fontSize: {
        "5xl": "24px",
        xl: "20px",
        "13xl": "32px",
        "9xl": "28px",
        "29xl": "48px",
        "17xl": "36px",
        "3xl": "22px",
        sm: "14px",
        "3xs": "10px",
        "2xs": "11px",
        smi: "13px",
        base: "16px",
        "7xs": "6px",
        "6xs-8": "6.8px",
        "5xs-7": "7.7px",
        "6xs-4": "6.4px",
        "7xs-3": "5.3px",
        "4xs-5": "8.5px",
        "5xs": "8px",
        "5xs-5": "7.5px",
        inherit: "inherit",
      },
      lineHeight: {
        "md": "52.89px", // Define your custom line height here
        "xl": "152.23%", // Define your custom line height here
      },
      colors: {
        "green-700": "#2B7A4F",
        "green-700": "#2B7A4F",
        "Lightgreen":"#CFF7AA",
        "neutral-500": "#7A7A7A",
        "lime-50": "#EFFDE2",
        "strokegreen-color": "#93BE79",
        "stone-50": "#F8F8F8",
        beige: "#EFFDE2",
        "dark-green-color": "#2C744D",
        "blue":"#6B97B1",
        "purple":"#5D5DF9",
        "black":"#1D1D1F",
        "gray":"#7F7E7E",
        "grey":"#DED8D8",
        "grayColor":"#E1E1E1",
        "grey-color": "#898989",
        "text-black-color": "#000",
        whitesmoke: "#F9F9F9",
        "stroke-green-color": "#93BE79",
        "red-color":"#DC5C5C",
        "lightBlue":"#3C93C4",
        "yellow":"#FFF4E8",
        "sand":"#F18404",
        "green":"#E7FFE7",
        "purple":"#2C48AB",
        "Lightpurple":"#DFE5FA",
        "FaceColor":"#F7F5BD",
        "pink":"#9877C8",

      },
      gradientColorStops: {
        "green-to-white": "180deg, #00FF00, #FFFFFF",
        "light-to-green" : "93deg, #AFE47E , #D8FAB9",
        "pink-to-light" : "180deg, #FD9AF9, #FFFFFF",
      },
    },
  },
  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [
  ],
};
