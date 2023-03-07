import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  cl: {
    background: "#202020",
    primary: "#000000",
    secondary: "#0070f3",
    white: "#FFFFFF",
    gray: "#333333",
    red: "#b91c1c",
  },
  sz: {
    xs: "0.25rem", // 4px
    xsm: "0.5rem", // 8px
    sm: "1rem", // 16px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xlg: "2.5rem", // 40px
    xlg1: "3rem", // 48px
    xlg2: "3.5rem", // 56px
    xlg3: "4rem", // 64px
    xlg4: "4.5rem", // 72px
    xlg5: "5rem", // 80px
    xlg6: "5.5rem", // 88px
    xlg7: "5.5rem", // 96px
  },
  tp: {
    tHidden: "00", //0%
    t10: "1A", //10%
    t20: "33", //20%
    t30: "4D", //30%
    t40: "66", //40%
    t50: "80", //50%
    t60: "99", //60%
    t70: "B3", //70%
    t80: "CC", //80%
    t90: "E6", //90%
    tVisible: "FF", //100%
  },

  tx: {
    xs: "font-size: 0.75rem; line-height: 1rem;",
    xsm: "font-size: 0.875rem; line-height: 1.25rem;",
    sm: "font-size: 1rem; ; line-height: 1.5rem;",
    md: "font-size: 1.125rem; line-height: 1.75rem;",
    lg: "font-size: 1.25rem line-height: 1.75rem;",
    xlg: "font-size: 1.5rem; line-height: 2rem;",
    xlg1: "font-size: 1.875rem; line-height: 2.25rem;",
    xlg2: "font-size: 2.25rem; line-height: 2.5rem;",
    xlg3: "font-size: 3rem; line-height: 1;",
    xlg4: "font-size: 3.75rem; line-height: 1;",
    xlg5: "font-size: 1.5rem; line-height: 1;",
  },

  an: {
    xsHoverScale: "transition: 200ms ease-in; :hover{ transform: scale(1.01);}",
    xsmHoverScale:
      "transition: 200ms ease-in; :hover{ transform: scale(1.10);}",
    smHoverScale: "transition: 200ms ease-in; :hover{ transform: scale(1.25);}",

    rotateToRight:
      "transition: 200ms ease-in; :hover {transform: rotate(4deg);}",
  },

  sc: {
    sm: "max-width: 640px",
    md: "max-width: 768px",
    lg: "max-width: 1024px",
    xlg1: "max-width: 1280px",
    xlg2: "max-width: 1536px",
  },
};
