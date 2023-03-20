import { Inter, DM_Mono, DM_Sans } from "@next/font/google";
import { createGlobalStyle } from "styled-components";

export const inter = Inter({ subsets: ["latin"], weight: "400" });
export const dm_sans = DM_Sans({ subsets: ["latin"], weight: "400" });
export const dm_mono = DM_Mono({ subsets: ["latin"], weight: "400" });

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 1rem;
  }

  * {
    box-sizing: border-box;
    text-rendering: geometricPrecision;
    font-family: ${inter.style.fontFamily};
  }

  body {
    margin: 0;
    background-color: white;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${dm_sans.style.fontFamily};
    font-weight: 400;
  }

  pre, code {
    font-family: ${dm_mono.style.fontFamily};
    font-size: inherit;
  }

  hr {
    width: 100%;
    background-color: black;
    border: none;
    height: 1px;
    margin: 0;
  }

  // Icon style override to inherit display values
  .ionicon {
    color: inherit;
    max-width: 20px;
    width: 100%;
  }
`;

export default GlobalStyle;
